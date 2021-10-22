import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  charactersList:any = [];
  info:any = {}

  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((character) =>{
      this.charactersList = character.results;
      this.info = character.info;
    })
  }

}
