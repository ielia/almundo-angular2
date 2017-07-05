import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { Hotel } from '../models/hotel';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// E.g.: {apiURL}/availability/Madrid/2017/01/01/2018/01/01/2?price=100-10000&stars=1,2,3,4,5

@Injectable()
export class AvailabilityService {
  constructor(private http: Http) {}

  getHotels(): Observable<Hotel[]> {
    return this.http.get(environment.apiURL + '/availability/Madrid/2017/01/01/2018/01/01/2?price=100-10000&stars=1,2,3,4,5')
      .map((res: Response) => res.json().instances)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
