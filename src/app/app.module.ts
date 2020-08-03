import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { BusSearchComponent } from './components/bus-search/bus-search.component';
import { MinibusSearchComponent } from './components/minibus-search/minibus-search.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ItineraryComponent } from './components/itinerary/itinerary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusSearchComponent,
    MinibusSearchComponent,
    ItineraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
