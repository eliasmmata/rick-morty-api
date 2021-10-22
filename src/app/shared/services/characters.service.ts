import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters():Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
  getCharacterById(id:any):Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id)
  }
  getLocationByPages(url:any):Observable<any> {
    // console.log(url)
    return this.http.get(url)
  }
}


