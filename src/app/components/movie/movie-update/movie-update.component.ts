import { SharedService } from './../../shared/shared.service';
import { MovieService } from './../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styleUrls: ['./movie-update.component.css']
})
export class MovieUpdateComponent implements OnInit {

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
    private sharedPrivace: SharedService,
    private fb:FormBuilder) { }

    updateForm!: FormGroup

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

      

      this.updateForm = this.fb.group({
        title:['',[Validators.required,Validators.minLength(4)]],
        director:['',[Validators.required] ], 
        genres:['',[Validators.required]],
        year:['',[Validators.required]]
  
      });

      this.movieService.getById(id !== null ? JSON.parse(id): String).subscribe((movie) => {
        this.movie = movie
        this.updateForm.setValue({
          title:movie.title,
          director:movie.director, 
          genres:movie.genres,
          year:movie.year,
        });
    });
  }

  updateMovie(){
    this.movieService.update(this.movie).subscribe(() => { 
      this.sharedPrivace.showMessage('Movie Added with Sucess!');
        this.router.navigate(["/movies"]);
      });
  }

  cancel(){
    this.router.navigate(["/movies"]);
  }

}
