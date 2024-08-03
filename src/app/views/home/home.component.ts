import { Component } from '@angular/core';
import { ArticlesComponent } from '../components/articles/articles.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [HeaderComponent, ArticlesComponent]
})
export class HomeComponent {

}
