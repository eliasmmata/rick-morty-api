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

  constructor(private charactersService:CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((character) =>{
      this.charactersList = character.results;
      this.info = character.info;
    })
  }
  public nextPage() {
    console.log('pagina siguiente')
    if(this.info.next) {
        this.charactersService.getLocationByPages(this.info.next).subscribe((character) => {
        this.charactersList= character.results
        this.info = character.info
        // console.log(location.info)
      })
    }
    window.scrollTo(0, 0);
  }
  public previousPage() {
    console.log('pagina anterior')
    if(this.info.prev) {
        this.charactersService.getLocationByPages(this.info.prev).subscribe((character) => {
        this.charactersList= character.results
        this.info = character.info
        // console.log(location.info)
      })
    }
    window.scrollTo(0, 0);
  }

}
