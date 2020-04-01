import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get(`${this.baseUrlcarpet}/`);
  }

  sendFormData(payload) {
    return this.http.post(`${this.baseUrlemail}`, payload);
 }
}
