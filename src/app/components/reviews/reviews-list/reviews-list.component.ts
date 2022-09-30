import { Component, OnInit } from '@angular/core';
import { Reviews } from 'src/app/interfaces/reviews';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {

  reviews: Reviews[] = [];

  constructor(private service: ReviewsService) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void {
    this.service.getReviews()
      .subscribe(reviews => this.reviews = reviews);
  }

  confirmDelete(item: any) {
    if (confirm('Supprimer ?') === true) {
      this.deleteReviews(item);
      return alert("Supprimé");
    } else {
      return alert("Annulé");
    }
  }

  deleteReviews(item: any): void {
    this.service.deleteReviews(item._id).subscribe(reviews => {
      this.getReviews();
    });
  }
}
