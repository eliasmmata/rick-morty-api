import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http:HttpClient) { }

  getLocations():Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/location')
  }
  getLocationById(id:any):Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/location/' + id)
  }
  getCharacterByUrl(url:any):Observable<any> {
    // console.log(url)
    return this.http.get(url)
  }
  getLocationByPages(url:any):Observable<any> {
    // console.log(url)
    return this.http.get(url)
  }
}
