import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { LocationsGalleryComponent } from './locations-gallery/locations-gallery.component';
import { LocationDetailsComponent } from './location-details/location-details.component';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationsGalleryComponent,
    LocationDetailsComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
