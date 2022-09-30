import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { News } from 'src/app/interfaces/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {
  newsResponse: any;
  myForm: any;
  id = this.route.snapshot.paramMap.get('id');
  updatedId: any;
  constructor(private service: NewsService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.findNews();
    this.initForm();
  }

  initForm() {
    this.myForm = this.fb.group({
      title: '',
      content: '',
      img: '',
      createdAt: this.today(),
    })
  }

  today() {
    return new Date();
  }

  updateNews(news: News) {
    console.log(typeof (news))
    this.service.updateNews(news, this.id)
      .subscribe(response => {
        console.log(response);
        alert("News mise à jour !");
        this.router.navigate(['news']);
      })
  };

  findNews(): void {
    this.service.findNews(this.id)
      .subscribe(res => {
        this.newsResponse = res[0];
        console.log(this.newsResponse)
        this.myForm.patchValue({ title: this.newsResponse.title });
      })
  }
}
