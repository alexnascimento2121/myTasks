import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-movie-delete',
  templateUrl: './movie-delete.component.html',
  styleUrls: ['./movie-delete.component.css']
})
export class MovieDeleteComponent implements OnInit {

  movie: Movie ={     
     title:"",
    director:"",
    year:"",
    genres:"",
  };

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    private movieService: MovieService, 
    private sharedPrivace: SharedService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

      this.movieService.getById(id !== null ? JSON.parse(id): String).subscribe(movie => {
        this.movie = movie
      })
  }

  deleteMovie():void{
    const id = this.route.snapshot.paramMap.get('id')
    this.movieService.delete(id !== null ? JSON.parse(id): String).subscribe(() => { 
      this.sharedPrivace.showMessage('Movie Removed with Sucess!');
        this.router.navigate(["/movies"]);
      });
  }

  cancel():void{
    this.router.navigate(["/movies"]);
  }

}
