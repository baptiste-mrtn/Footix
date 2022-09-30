import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reviews } from 'src/app/interfaces/reviews';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-reviews-add',
  templateUrl: './reviews-add.component.html',
  styleUrls: ['./reviews-add.component.css']
})
export class ReviewsAddComponent implements OnInit {
  reviews: Reviews[] = [];
  myForm!: FormGroup;
  constructor(private service: ReviewsService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      rate: 0,
      createdAt: this.today(),
    });
  }

  today() {
    return new Date();
  }

  addReviews(form: FormGroup) {
    this.reviews[0] = {
      title: form.value.title,
      content: form.value.content,
      rate: form.value.rate,
      createdAt: form.value.createdAt,
    }
    console.log(this.reviews[0]);
    this.service.addReviews(this.reviews[0])
      .subscribe(response => {
        console.log(response)
      })
    alert("Reviews Ajoutée !");
    this.router.navigate(['reviews']);
  };
}
