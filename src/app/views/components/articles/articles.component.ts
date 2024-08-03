import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleModel } from '../../models/article.model';
import { ArticleComponent } from '../article/article.component';
import { ArticleService } from './../../services/article.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
    standalone: true,
    imports: [
    ArticleComponent,
    AsyncPipe
],
})
export class ArticlesComponent implements OnInit {
  articles$!: Observable<ArticleModel[]>;
  constructor(private articleService: ArticleService) {}
  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
  }
}
