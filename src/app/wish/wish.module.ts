import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishComponent } from './wish.component';
import { ContactModule } from '../contact/contact.module';
import { RoutingModule } from '../routing.module';

@NgModule({
  declarations: [
    WishListComponent, 
    AddWishFormComponent, 
    WishFilterComponent, 
    WishListItemComponent, 
    WishComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ContactModule,
    RoutingModule
  ],
  exports: [
    WishComponent
  ]
})
export class WishModule { }
