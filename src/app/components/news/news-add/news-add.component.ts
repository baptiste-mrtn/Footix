import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {
  news: News[] = [];
  myForm!: FormGroup;
  constructor(private service: NewsService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      img: '',
      createdAt: this.today(),
    });
  }

  today() {
    return new Date();
  }

  addNews(form: FormGroup) {
    this.news[0] = {
      title: form.value.title,
      content: form.value.content,
      img: form.value.img,
      createdAt: form.value.createdAt,
    }
    console.log(this.news[0]);
    this.service.addNews(this.news[0])
      .subscribe(response => {
        console.log(response)
      })
    alert("News Ajoutée !");
    this.router.navigate(['news']);
  };
}
