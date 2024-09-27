import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(`${this.baseUrl}/books`);
  }

  getBook(id: any) {
    return this.http.get(`${this.baseUrl}/books/${id}`);
  }

  booksByCateg(categ: any) {
    return this.http.get(`${this.baseUrl}/${categ}`)
  }

}
