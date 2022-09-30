import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { NewsListComponent } from './news/news-list/news-list.component';

@NgModule({
  declarations: [
    NewsListComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
  ]
})
export class ComponentsModule { }
