import { Component, OnInit } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';
import { EventService } from '../shared/services/EventService';
import { WishService } from './wish/wish.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  items : WishItem[] = [];

  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish : any) => {
      let index = this.items.indexOf(wish);
      this.items.splice(index, 1);
    })
  }

  ngOnInit(): void {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    },
    (error : any) => {
      alert(error.message);
    }
  );
  }

  filter: any;
}
