import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // needed to use NgModel
import { WishItem } from '../../shared/models/wishItem';


const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete,
]

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<any>();
  listFilter : any = '0';

  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  changeFilter(value : any) {
    this.filter.emit(filters[value]);
  }
}
