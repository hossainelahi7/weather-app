import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import {Location} from './location'

@Injectable()
export class LocationService {

  private locationapi = "../assets/location.json";

  constructor(private _http: HttpClient) { }

  getlocation():Observable<Location>{
    return this._http.get<Location>(this.locationapi)
    // .pipe(
    //   tap(data=> console.log('Location: '+ JSON.stringify(data))),
    //   catchError(error => console.log(error))
    // );
  }

}
