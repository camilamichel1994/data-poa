import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusSearchComponent } from './components/bus-search/bus-search.component';
import { MinibusSearchComponent } from './components/minibus-search/minibus-search.component';
import { ItineraryComponent} from './components/itinerary/itinerary.component'

const routes: Routes = [
  { path: "", component: BusSearchComponent },
  { path: "lotacao", component: MinibusSearchComponent },
  { path: ":id", component: ItineraryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
