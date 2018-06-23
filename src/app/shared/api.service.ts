import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  baseUrl = 'http://API URL GOES HERE';
  constructor(private http: HttpClient) {}

  getLeaderboard() {
    return this.http.get(`${this.baseUrl}/`);
  }
}
