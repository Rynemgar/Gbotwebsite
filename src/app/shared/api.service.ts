import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  baseUrlleader = 'https://gbotapi.herokuapp.com/api/levels';
  baseUrlstats = 'http://gbotapi.herokuapp.com/api/stats';
  baseUrlcarpet = 'http://gbotapi.herokuapp.com/api/carpet';
  constructor(private http: HttpClient) {}

  getLeaderboard() {
    return this.http.get(`${this.baseUrlleader}/`);
  }

  getStats() {
    return this.http.get(`${this.baseUrlstats}/`);
  }

  getCarpet() {
    return this.http.get(`${this.baseUrlcarpet}/`);
  }
}
