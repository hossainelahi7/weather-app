import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import {Location} from './location'
import { of } from 'rxjs/observable/of';

@Injectable()
export class LocationService {

  private locationapi = "../assets/location.json";

  constructor(private _http: HttpClient) { }

  getlocation():Observable<Location>{
    return this._http.get<Location>(this.locationapi)
    .pipe(
      catchError(this.handleError<Location>('getlocati  on()'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
