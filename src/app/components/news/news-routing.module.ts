import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsListComponent } from './news-list/news-list.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'edit/:id', component: NewsEditComponent },
  { path: 'add', component: NewsAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
