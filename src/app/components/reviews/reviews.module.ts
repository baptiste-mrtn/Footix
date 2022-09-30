import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReviewsAddComponent } from './reviews-add/reviews-add.component';
import { ReviewsEditComponent } from './reviews-edit/reviews-edit.component';

@NgModule({
  declarations: [
    ReviewsEditComponent,
    ReviewsAddComponent
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ReviewsModule { }
