import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {CheckboxModule} from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { SideFilterComponent } from './flight-booking/side-filter/side-filter.component';
import { FlightListComponent } from './flight-booking/flight-list/flight-list.component';
import { FlightItemComponent } from './flight-booking/flight-list/flight-item/flight-item.component';
import { FilterCheckboxComponent } from './flight-booking/side-filter/filter-checkbox/filter-checkbox.component';
import { FilterTypeTitleComponent } from './flight-booking/side-filter/filter-type-title/filter-type-title.component';
import {SliderModule} from 'primeng/slider';

@NgModule({
  declarations: [
    AppComponent,
    FlightBookingComponent,
    SideFilterComponent,
    FlightListComponent,
    FlightItemComponent,
    FilterCheckboxComponent,
    FilterTypeTitleComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    FormsModule,
    FlexLayoutModule,
    CheckboxModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
