import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { CharactersGalleryComponent } from './characters-gallery/characters-gallery.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';


@NgModule({
  declarations: [
    CharactersComponent,
    CharactersGalleryComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
