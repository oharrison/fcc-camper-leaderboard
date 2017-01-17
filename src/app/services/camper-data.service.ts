import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Camper } from '../models/camper';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class CamperDataService {
  private CAMPER_DATA_URL:string = 'https://fcctop100.herokuapp.com/api/fccusers/top';

  constructor(private http: Http) { }

  getRecentData(): Observable<Camper[]> {
    return this.http.get(this.CAMPER_DATA_URL + '/recent')
                      .map(this.toCamperArray)
                      .catch(this.handleError);
  }

  getAllTimeData(): Observable<Camper[]> {
    return this.http.get(this.CAMPER_DATA_URL + '/alltime')
                      .map(this.toCamperArray)
                      .catch(this.handleError);
  }

  private toCamperArray(response): Array<Camper> {
    return response.json().map((data) => new Camper(data)) as Array<Camper>
  }

  private handleError(error: any): Observable<any> {
    return error.message || error;
  }
}
