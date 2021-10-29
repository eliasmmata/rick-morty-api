import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { delay } from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient, private spinnerService:SpinnerService) { }

  getCharacters():Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character').pipe(
      delay(250)
    );
  }

  getCharacterById(id:any):Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character/' + id).pipe(
      delay(250)
    );
  }
  getLocationByPages(url:any):Observable<any> {
    return this.http.get(url)
  }
  
}


