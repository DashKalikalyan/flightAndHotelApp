import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { SideFilterComponent } from './flight-booking/side-filter/side-filter.component';
import { FlightListComponent } from './flight-booking/flight-list/flight-list.component';
import { FlightItemComponent } from './flight-booking/flight-list/flight-item/flight-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightBookingComponent,
    SideFilterComponent,
    FlightListComponent,
    FlightItemComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
