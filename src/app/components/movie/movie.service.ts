import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable,map } from 'rxjs';
import { Movie } from './movie.model';

import { API } from 'src/app/app.api';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient,private sharedService: SharedService) { }

  handleError(error:any): Observable<any>{
    let errorMessage;
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;      
    }else{
      errorMessage = `Error: ${error.status}\nMessage:${error.message}`;
    }
    this.sharedService.showMessage(errorMessage,true)
    return EMPTY;
  }

  create(movie: Movie): Observable<Movie> { 
    
    return this.http.post<Movie>(`${API}/movies`,movie);
  }

  index():Observable<Movie[]> {
    return this.http.get<Movie[]>(`${API}/movies`);
  }

  getById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${API}/movies/${id}`);
  }

  update(movie: Movie): Observable<Movie> {
    const uri=`${API}/movies/${movie.id}`;
    return this.http.put<Movie>(uri,movie).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  delete(id: string): Observable<Movie> {
    const uri=`${API}/movies/${id}`;
    return this.http.delete<Movie>(uri);
  }
}
