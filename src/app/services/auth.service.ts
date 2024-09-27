import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:3000"
  constructor(
    private http: HttpClient
  ) { }

  registerUser(data: User) {
    return this.http.post(`${this.baseUrl}/users`, data)
  }

  signIn() {
    return this.http.get(`${this.baseUrl}/users`)
  }
}
