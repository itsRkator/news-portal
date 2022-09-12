import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url = 'http://localhost:3000/news';
  constructor(private http: HttpClient) { }


  getNews() {
    return this.http.get(this.url);
  }

}
