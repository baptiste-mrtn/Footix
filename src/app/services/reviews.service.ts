import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reviews } from '../interfaces/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  reviews!: Reviews[];
  addReviewsResult: any;

  private reviewsUrl = 'http://localhost:3001/reviews';

  constructor(private http: HttpClient
  ) { }

  getReviews(): Observable<Reviews[]> {
    return this.http.get<Reviews[]>(this.reviewsUrl);
  }

  deleteReviews(id: String): Observable<Reviews> {
    return this.http.delete<Reviews>(this.reviewsUrl + '/delete/' + id);
  }

  addReviews(reviews: Reviews): Observable<Reviews> {
    return this.http.post<Reviews>(this.reviewsUrl + '/add', reviews);
  }

  updateReviews(reviews: Reviews, id: any): Observable<Reviews> {
    console.log(reviews);
    return this.http.put<Reviews>(this.reviewsUrl + '/edit/' + id, reviews);
  }

  findReviews(id: any): Observable<Reviews[]> {
    return this.http.get<Reviews[]>(this.reviewsUrl + '/' + id);
  }
}
