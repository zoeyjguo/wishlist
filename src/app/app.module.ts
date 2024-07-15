import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { WishModule } from './wish/wish.module';
import { provideHttpClient } from '@angular/common/http';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule,
    WishModule,
    ContactModule,
    RouterModule,
  ], 
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
