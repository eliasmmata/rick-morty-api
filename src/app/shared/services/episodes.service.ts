import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http:HttpClient) { }

  getEpisodes():Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/episode')
  }
  /* getLocationById(id:any):Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/location/' + id)
  } */
}
