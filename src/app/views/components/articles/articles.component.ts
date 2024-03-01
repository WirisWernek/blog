import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleModel } from '../../models/article.model';
import { ArticleService } from './../../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent {
  articles$!: Observable<ArticleModel[]>;
  constructor(private articleService: ArticleService) {}
  ngOnInit() {
    this.articles$ = this.articleService.getArticles();
  }
}
