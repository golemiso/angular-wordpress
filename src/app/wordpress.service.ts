import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Article } from './models/article';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  // params: {
  //   'context': 'embed'
  // }
};

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  constructor(private http: HttpClient) { }

  fetchArticles(): Observable<Array<Article>> {

    return this.http.get<Array<Article>>("https://demo.wp-api.org/wp-json/wp/v2/posts", httpOptions)
    // const article = [{ slug: "slug", title: "title", content: "content" }];
    // return of(article);
  }
}
