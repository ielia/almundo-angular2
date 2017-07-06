import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { Hotel } from '../models/hotel';
import { PriceRange } from '../models/priceRange';
import { Observable, Subject } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// E.g.: {apiURL}/availability/Madrid/2017/01/01/2018/01/01/2?price=100-10000&stars=1,2,3,4,5

@Injectable()
export class AvailabilityService {
  private filterName: String;
  private filterPriceRange: PriceRange;
  private filterStars: Number[] = [1, 2, 3, 4, 5];

  private allHotels: Observable<Hotel[]>;

  private filteredHotels: Subject<Hotel[]> = new Subject();
  private starred: Subject<Number[]> = new Subject();
  private totalPriceRange: Subject<PriceRange> = new Subject();

  constructor(private http: Http) {}

  public getHotels(): Observable<Hotel[]> {
    return this.filteredHotels.asObservable();
  }

  public getStarred(): Observable<Number[]> {
    return this.starred.asObservable();
  }

  public getTotalPriceRange(): Observable<PriceRange> {
    return this.totalPriceRange.asObservable();
  }

  public init() {
    this.allHotels = this.internalGetHotels();
    this.updateTotalPriceRange();
    this.updateHotels();
    this.filteredHotels.subscribe(hotels => {
      this.starred.next(hotels.reduce((starred, hotel) => { ++starred[Number(hotel.stars)]; return starred; }, [0, 0, 0, 0, 0]));
    });
  }

  public setFilterPriceRange(arrayedRange: Number[]) {
    this.filterPriceRange = new PriceRange(arrayedRange[0], arrayedRange[1]);
    this.updateHotels();
  }

  public setFilterStars(stars: Number[]) {
    this.filterStars = stars;
    this.updateHotels();
  }

  private updateHotels() {
    this.allHotels.subscribe(hotels => {
      this.filteredHotels.next(this.filterPriceRange ?
        hotels.filter(hotel =>
          hotel.price.amount >= this.filterPriceRange.lowerBound &&
          hotel.price.amount <= this.filterPriceRange.upperBound &&
          this.filterStars.indexOf(Number(hotel.stars)) >= 0 &&
          (!this.filterName || hotel.name.toUpperCase().indexOf(this.filterName.toLowerCase()) >= 0)) :
        hotels
      );
    });
  }

  private updateTotalPriceRange() {
    this.allHotels.subscribe(hotels => {
      this.totalPriceRange.next(hotels.reduce((pr, h) => pr.addPrice(h.price.amount), new PriceRange()));
    });
  }

  private internalGetHotels(): Observable<Hotel[]> {
    return this.http.get(environment.apiURL + '/availability/Madrid/2017/01/01/2018/01/01/2')
      .map((res: Response) => res.json().instances)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
