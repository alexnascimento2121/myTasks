import { Movie } from './../movie.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { SharedService } from '../../shared/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

 
movie: Movie ={
  title:"",
  director:"",  
  genres:"",
  year:"",
  };
  constructor(private router : Router, 
    private movieService: MovieService,
     private sharedPrivace: SharedService,
     private fb:FormBuilder) { }

  createForm!: FormGroup
  
  ngOnInit(): void {
    this.createForm = this.fb.group({
      title:["",[Validators.required,Validators.minLength(4)]],
      director:["",[Validators.required] ], 
      genres:["",[Validators.required]],
      year:["",[Validators.required]]

    });
  }

  createMovie():void{   
    if(this.createForm.valid){
      this.movieService.create(this.createForm.value).subscribe(() => { 
        this.sharedPrivace.showMessage('Movie Added with Sucess!');
          this.router.navigate(["/movies"]);
        });
    }   
  }

  cancel(){
    this.router.navigate(["/movies"]);
  }

}
