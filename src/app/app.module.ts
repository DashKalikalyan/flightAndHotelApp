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
import { PaginationComponent } from './flight-booking/flight-list/pagination/pagination.component';
import { FlightDetailsComponent } from './flight-booking/flight-list/flight-item/flight-details/flight-details.component';
import { ItineraryComponent } from './flight-booking/flight-list/flight-item/flight-details/itinerary/itinerary.component';
import { FareSummeryRulesComponent } from './flight-booking/flight-list/flight-item/flight-details/fare-summery-rules/fare-summery-rules.component';
import { BaggageRulesComponent } from './flight-booking/flight-list/flight-item/flight-details/baggage-rules/baggage-rules.component';
import { BookingDetailsComponent } from './flight-booking/booking-details/booking-details.component';
import {CalendarModule, DropdownModule, RadioButtonModule} from 'primeng/primeng';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelListComponent } from './hotel-booking/hotel-list/hotel-list.component';
import { HotelSideFilterComponent } from './hotel-booking/hotel-side-filter/hotel-side-filter.component';
import {RouterModule, Routes} from '@angular/router';
import { FareDetailsComponent } from './flight-booking/booking-details/fare-details/fare-details.component';
import { PaymentComponent } from './payment/payment.component';
import { TotalPricePayNowComponent } from './payment/total-price-pay-now/total-price-pay-now.component';
import { FooterComponent } from './footer/footer.component';
import { MobileWalletComponent } from './payment/mobile-wallet/mobile-wallet.component';
import { NetBankingComponent } from './payment/net-banking/net-banking.component';
import { DebitCardComponent } from './payment/debit-card/debit-card.component';
import { CreditCardComponent } from './payment/credit-card/credit-card.component';
import { PaymentPlanComponent } from './payment/payment-plan/payment-plan.component';
import { MinimumPriceInAirlineComponent } from './flight-booking/minimum-price-in-airline/minimum-price-in-airline.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'flight-list', pathMatch: 'full' },
  {path: 'flight-list', component: FlightBookingComponent},
  {path: 'flight-review/:id', component: BookingDetailsComponent},
  {path: 'payment', component: PaymentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FlightBookingComponent,
    SideFilterComponent,
    FlightListComponent,
    FlightItemComponent,
    FilterCheckboxComponent,
    FilterTypeTitleComponent,
    PaginationComponent,
    FlightDetailsComponent,
    ItineraryComponent,
    FareSummeryRulesComponent,
    BaggageRulesComponent,
    BookingDetailsComponent,
    HotelBookingComponent,
    HotelListComponent,
    HotelSideFilterComponent,
    FareDetailsComponent,
    PaymentComponent,
    TotalPricePayNowComponent,
    FooterComponent,
    MobileWalletComponent,
    NetBankingComponent,
    DebitCardComponent,
    CreditCardComponent,
    PaymentPlanComponent,
    MinimumPriceInAirlineComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    FormsModule,
    FlexLayoutModule,
    CheckboxModule,
    BrowserAnimationsModule,
    SliderModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
