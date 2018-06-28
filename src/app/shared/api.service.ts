import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  baseUrlleader = 'https://gbotapi.herokuapp.com/api/levels';
  baseUrlstats = 'http://localhost:1337/api/stats';
  constructor(private http: HttpClient) {}

  getLeaderboard() {
    return this.http.get(`${this.baseUrlleader}/`);
  }

  getStats() {
    return this.http.get(`${this.baseUrlstats}/`);
  }
}
