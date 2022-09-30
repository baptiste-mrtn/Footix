import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
  { path: 'reviews', loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
