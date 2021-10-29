import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-gallery',
  templateUrl: './locations-gallery.component.html',
  styleUrls: ['./locations-gallery.component.scss']
})
export class LocationsGalleryComponent implements OnInit {

  @Input() locationsList:any= [];
  @Input() info:any = {};
  
  constructor() { }

  ngOnInit(): void {
  }
  public getPageNumber() {
    var url_string = this.info.next; //window.location.href
    var url = new URL(url_string);
    var pageNumber = Number(url.searchParams.get("page"))
    pageNumber = pageNumber -1;
    return pageNumber
  }

}
