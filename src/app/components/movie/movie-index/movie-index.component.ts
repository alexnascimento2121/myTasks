import { Movie } from './../movie.model';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { DialogService } from '../../shared/dialog.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.css']
})
export class MovieIndexComponent implements OnInit {

  movies: Movie[] = [];
  displayedColumns: string[] = ['id','title', 'director', 'genres', 'year','actions'];

  constructor(
    private movieService: MovieService,
    private dialogService:DialogService,
    private sharedPrivace: SharedService,
   
    ) { }

  ngOnInit(): void {
   this.updateMovies();
  }

  updateMovies(){
    this.movieService.index().subscribe(movies => {
      this.movies = movies
    });
  }

  onDelete(id: any){
    this.dialogService.openConfirmDialog('You sure that you desiree remove this film ?')
    .afterClosed().subscribe((res) => {
        if(res){
          
          this.movieService.delete(id !== null ? JSON.parse(id): String).subscribe(() => { 
            this.sharedPrivace.showMessage('Movie Removed with Sucess!');
           this.updateMovies();
            });
        }
      
    });
    }

}
