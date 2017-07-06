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
  private filterStars: Number[] = [];

  private allHotels: Observable<Hotel[]>;

  private filteredHotels: Subject<Hotel[]> = new Subject();
  private preFilteredHotels: Subject<Hotel[]> = new Subject();
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
    this.subscribeTotalPriceRangeToAllHotels();
    this.subscribePreFilteredHotelsToAllHotels();
    this.subscribeStarredToPreFilteredHotels();
    this.subscribeFilteredHotelsToPreFilteredHotels();
  }

  public setFilterName(filterName: String) {
    this.filterName = filterName;
    // this.preFilteredHotels.next(false);
    this.subscribePreFilteredHotelsToAllHotels();
  }

  public setFilterPriceRange(arrayedRange: Number[]) {
    this.filterPriceRange = new PriceRange(arrayedRange[0], arrayedRange[1]);
    // this.preFilteredHotels.next(false);
    this.subscribePreFilteredHotelsToAllHotels();
  }

  public setFilterStars(stars: Number[]) {
    this.filterStars = stars;
    // this.preFilteredHotels.next(false);
    this.subscribePreFilteredHotelsToAllHotels();
  }

  private subscribeFilteredHotelsToPreFilteredHotels() {
    this.preFilteredHotels.subscribe(hotels => {
      // console.log('>> FILTERED: ' + hotels);
      // this.filteredHotels.subscribe(hs => console.log('<< FILTERED: ' + hs));
      if (hotels) { this.filteredHotels.next(this.filterStars.length ? hotels.filter(hotel => this.filterStars.indexOf(Number(hotel.stars)) >= 0) : hotels); }
    });
  }

  private subscribeStarredToPreFilteredHotels() {
    this.preFilteredHotels.subscribe(hotels => {
      // console.log('>> STARRED: ' + hotels);
      // this.starred.subscribe(s => console.log('<< STARRED: ' + s));
      if (hotels) { this.starred.next(hotels.reduce((starred, hotel) => { ++starred[Number(hotel.stars) - 1]; return starred; }, [0, 0, 0, 0, 0])); }
    });
  }

  private subscribeTotalPriceRangeToAllHotels() {
    this.allHotels.subscribe(hotels => {
      // console.log('>> TOTAL PRICE: ' + hotels);
      // this.totalPriceRange.subscribe(pr => console.log('<< TOTAL PRICE: ' + pr.lowerBound + '~' + pr.upperBound));
      if (hotels) { this.totalPriceRange.next(hotels.reduce((priceRange, h) => priceRange.addPrice(h.price.amount), new PriceRange())); }
    });
  }

  private subscribePreFilteredHotelsToAllHotels() {
    this.allHotels.subscribe(hotels => {
      // console.log('>> PRE-FILTERED: ' + hotels);
      // this.preFilteredHotels.subscribe(hs => console.log('<< PRE-FILTERED: ' + hs));
      if (hotels) {
        this.preFilteredHotels.next(
          hotels.filter(hotel => hotel.inPriceRangeSafe(this.filterPriceRange) && hotel.matchesName(this.filterName))
        );
      }
    });
  }

  private internalGetHotels(): Observable<Hotel[]> {
    return this.http.get(environment.apiURL + '/availability/Madrid/2017/01/01/2018/01/01/2')
      .map((res: Response) => res.json().instances.map(hotel => new Hotel(hotel)))
      .catch((error: any) => Observable.throw((error.json && error.json().error) || error || 'Server error'));
  }
}
