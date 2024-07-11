import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText! : string;
  @Input() isFulfilled! : boolean;
  @Output() isFulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    // return this.isFulfilled ? ['strikeout', 'text-muted'] : [];
    return {'strikeout text-muted': this.isFulfilled};
  }

  toggleFulfilled() {
    this.isFulfilled = !this.isFulfilled;
    this.isFulfilledChange.emit(this.isFulfilled);
  }
}
