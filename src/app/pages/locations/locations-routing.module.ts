import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { LocationsComponent } from './locations.component';

const routes: Routes = [
  
  { path: '', component: LocationsComponent },
  { path: ':id', component: LocationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
