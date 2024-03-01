import { Component, Input } from '@angular/core';
import { ArticleModel } from '../../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article!: ArticleModel;
}
