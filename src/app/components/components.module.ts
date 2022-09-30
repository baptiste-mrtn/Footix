import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NewsListComponent } from './news/news-list/news-list.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';

@NgModule({
  declarations: [
    NewsListComponent,
    ReviewsListComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ]
})
export class ComponentsModule { }
