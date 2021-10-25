import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  
  public showContent: boolean = false;

  public characterDetail: any = {};

  constructor(private route:ActivatedRoute, private charactersService:CharactersService) { }

  ngOnInit(): void {
    setTimeout(()=>this.showContent=true, 1000);

    this.route.paramMap.subscribe(params => {
      let idCharacter = Number(params.get('id'))
      this.charactersService.getCharacterById(idCharacter).subscribe((character) => {
        this.characterDetail = character;
        this.characterDetail.origin.name = character.origin.name;
      })
    })
  }

}
