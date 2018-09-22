import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../wordpress.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  articles: Array<Article>;

  constructor(private wpService: WordpressService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.wpService.fetchArticles().subscribe(a => this.articles = a);;
  }
}
