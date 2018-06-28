import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  baseUrl = 'https://gbotapi.herokuapp.com/api/levels';
  constructor(private http: HttpClient) {}

  getLeaderboard() {
    return this.http.get(`${this.baseUrl}/`);
  }
}
