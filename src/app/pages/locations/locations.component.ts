import { LocationsService } from 'src/app/shared/services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locationsList:any = [];
  info:any = {}

  constructor(private locationsService:LocationsService) { }

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe((location) => {
      this.locationsList = location.results;
      this.info = location.info;
      console.log(this.info)
    })
  }

}
