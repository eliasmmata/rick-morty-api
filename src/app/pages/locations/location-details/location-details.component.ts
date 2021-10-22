import { LocationsService } from 'src/app/shared/services/locations.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

  public locationDetail:any = {}
  residentsLocation:any= []

  constructor(private route:ActivatedRoute, private locationsService:LocationsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        let idLocation = Number(params.get('id'))
        this.locationsService.getLocationById(idLocation).subscribe((location) => {
        this.locationDetail = location;

          for(let i = 0; i < location.residents.length; i++) {
            const urlResident = location.residents[i];
            this.locationsService.getCharacterByUrl(urlResident).subscribe((resident) => {
            this.residentsLocation.push(resident)
          })
        }
      })
    })
  }

}
