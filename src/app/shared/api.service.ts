import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  baseUrlleader = 'https://gbotapi.herokuapp.com/api/reps';
  baseUrlcarpet = 'http://gbotapi.herokuapp.com/api/carpet';
  baseUrlemail = 'http://gbotapi.herokuapp.com/api/sendEmail';
  constructor(private http: HttpClient) {}

  getLeaderboard() {
    return this.http.get(`${this.baseUrlleader}/`);
  }



  getCarpet() {
    return this.http.get(`${this.baseUrlcarpet}/`)
      .pipe(
        map((carpetList: RawCarpet[]) => {
          return carpetList.map((carpet): Carpet => ({
            ID: parseInt(carpet.ID, 10),
            Range: carpet.Range,
            Colour: carpet.Colour,
            Size: carpet.Size,
            Cost: carpet.Cost,
            Value: carpet.Value,
            Purchased: carpet.Purchased === 'true'
          })
        );
      }));
  }

  sendFormData(payload) {
    return this.http.post(`${this.baseUrlemail}`, payload);
 }
}

export interface RawCarpet {
  ID: string;
  Range: string;
  Colour: string;
  Size: string;
  Cost: string;
  Value: string;
  Purchased: string;
}
export interface Carpet {
  ID: number;
  Range: string;
  Colour: string;
  Size: string;
  Cost: string;
  Value: string;
  Purchased: boolean;
}
