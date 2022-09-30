import { Injectable } from '@angular/core';
import { News } from './../interfaces/news';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class NewsService {
  news!: News[];
  addNewsResult: any;

  private newsUrl = 'http://localhost:3001/news';

  constructor(private http: HttpClient
  ) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl);
  }

  deleteNews(id: String): Observable<News> {
    return this.http.delete<News>(this.newsUrl + '/delete/' + id);
  }

  addNews(news: News): Observable<News> {
    return this.http.post<News>(this.newsUrl + '/add', news);
  }

  updateNews(news: News, id: any): Observable<News> {
    console.log(news);
    return this.http.put<News>(this.newsUrl + '/edit/' + id, news);
  }

  findNews(id: any): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl + '/' + id);
  }

}
