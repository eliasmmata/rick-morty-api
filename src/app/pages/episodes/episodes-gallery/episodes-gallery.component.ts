import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-episodes-gallery',
  templateUrl: './episodes-gallery.component.html',
  styleUrls: ['./episodes-gallery.component.scss']
})
export class EpisodesGalleryComponent implements OnInit {

  @Input() episodesList:any = [];
  @Input() info:any = {}



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
