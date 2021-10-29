import { CharactersModule } from './characters.module';
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

  constructor(private charactersService:CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((character) =>{
      this.charactersList = character.results;
      this.info = character.info;
    })
  }

  public nextPage() {
    /* this.pageList() */
    console.log('pagina siguiente')
    if(this.info.next) {
        this.charactersService.getLocationByPages(this.info.next).subscribe((character) => {
        this.charactersList= character.results
        this.info = character.info
        // console.log(character.info)
        if(character.info.next === null) {
          character.info.next = 'https://rickandmortyapi.com/api/character?page=1'
          console.log('vuelvo a la primera pagina')
        }
      })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  public previousPage() {   
    console.log('pagina anterior')
    if(this.info.prev) {
        this.charactersService.getLocationByPages(this.info.prev).subscribe((character) => {
        this.charactersList= character.results
        this.info = character.info
        // console.log(character.info)
      })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

}

