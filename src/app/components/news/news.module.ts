import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewsEditComponent,
    NewsAddComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class NewsModule { }
