import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer.component';
import { EmployeeComponent } from './employee.component';
import { ReviewComponent } from './review.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { TrackUserComponent } from './components/track-user/track-user.component';
import { GuessingGameComponent } from './components/guessing-game/guessing-game.component';

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, CustomerComponent,ReviewComponent, CartComponent, OrdersComponent, TrackUserComponent, GuessingGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
