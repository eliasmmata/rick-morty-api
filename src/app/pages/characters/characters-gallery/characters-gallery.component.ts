import { Component, OnInit,Input } from '@angular/core';
import { CharacterInterface } from 'src/app/models/character.interface';

@Component({
  selector: 'app-characters-gallery',
  templateUrl: './characters-gallery.component.html',
  styleUrls: ['./characters-gallery.component.scss']
})
export class CharactersGalleryComponent implements OnInit {

  @Input() charactersList:any= [];
  @Input() info:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
