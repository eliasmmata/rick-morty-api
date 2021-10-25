import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http:HttpClient) { }

  getEpisodes():Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/episode').pipe(
      delay(250)
    );
  }
  getEpisodeById(id:any):Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/episode/' + id).pipe(
      delay(250)
    );
  }
  getLocationByPages(url:any):Observable<any> {
    // console.log(url)
    return this.http.get(url)
  }
}
