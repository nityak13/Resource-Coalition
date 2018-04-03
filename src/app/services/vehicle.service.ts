import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IVehicle } from './../vehicle';

@Injectable()
export class VehicleService {

  private baseUrl = 'api/carLogs';

  constructor(private http: Http) { }

  getIVS(): Observable<IVehicle[]> {
    return this.http.get(this.baseUrl)
      .map(this.extractData)
      .do(data => console.log('Received vehicle status data'))
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.data || body || {};
  }

  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
