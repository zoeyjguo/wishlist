import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from "./add-wish-form/add-wish-form.component";
import { WishFilterComponent } from "./wish-filter/wish-filter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  filter: any;
}
