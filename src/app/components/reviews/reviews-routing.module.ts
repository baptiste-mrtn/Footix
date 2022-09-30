import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsAddComponent } from './reviews-add/reviews-add.component';
import { ReviewsEditComponent } from './reviews-edit/reviews-edit.component';
import { ReviewsListComponent } from './reviews-list/reviews-list.component';

const routes: Routes = [
  { path: '', component: ReviewsListComponent },
  { path: 'edit/:id', component: ReviewsEditComponent },
  { path: 'add', component: ReviewsAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
