import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainGenre } from '../models/mainGenre';

@Injectable({
  providedIn: 'root'
})
export class MovieservicesService {
  constructor(private http:HttpClient) {
   }
  getGenreList():Observable<MainGenre[]>{
    return this.http.get<MainGenre[]>('https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41');
  }
  
  getMoiveListbyGenre(genreId):Observable<any[]>{
    return this.http.get<any>('https://api.themoviedb.org/3/genre/'+genreId+'/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41');
  }
  
  getMoiveDeatils(movieId):Observable<any[]>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=68e82445c8842ba8616d0f6bf0e97a41');
  }
}
