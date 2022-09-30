import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Reviews } from 'src/app/interfaces/reviews';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews-edit',
  templateUrl: './reviews-edit.component.html',
  styleUrls: ['./reviews-edit.component.css']
})
export class ReviewsEditComponent implements OnInit {
  reviewsResponse: any;
  myForm: any;
  id = this.route.snapshot.paramMap.get('id');
  updatedId: any;
  constructor(private service: ReviewsService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.findReviews();
    this.initForm();
  }

  initForm() {
    this.myForm = this.fb.group({
      title: '',
      content: '',
      rate: 0,
      createdAt: this.today(),
    })
  }

  today() {
    return new Date();
  }

  updateReviews(reviews: Reviews) {
    console.log(typeof (reviews))
    this.service.updateReviews(reviews, this.id)
      .subscribe(response => {
        console.log(response);
        alert("Reviews mise à jour !");
        this.router.navigate(['reviews']);
      })
  };

  findReviews(): void {
    this.service.findReviews(this.id)
      .subscribe(res => {
        this.reviewsResponse = res[0];
        console.log(this.reviewsResponse)
        this.myForm.patchValue({ title: this.reviewsResponse.title });
      })
  }
}
