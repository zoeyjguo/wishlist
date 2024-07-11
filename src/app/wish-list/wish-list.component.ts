import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  @Input() wishes : WishItem[] = [];

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
  }
}
