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
  /* EJEMPLO CAMBIAR POR CHARACTER getLocationById(id:any):Observable<any> {
  return this.http.get('https://rickandmortyapi.com/api/location/' + id)
} */
}


