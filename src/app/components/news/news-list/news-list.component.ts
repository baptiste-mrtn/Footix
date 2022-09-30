import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from './../../../interfaces/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {

  news: News[] = [];

  constructor(private service: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.service.getNews()
      .subscribe(news => this.news = news);
  }

  confirmDelete(item: any) {
    if (confirm('Supprimer ?') === true) {
      this.deleteNews(item);
      return alert("Supprimé");
    } else {
      return alert("Annulé");
    }
  }

  deleteNews(item: any): void {
    this.service.deleteNews(item._id).subscribe(news => {
      this.getNews();
    });
  }
}
