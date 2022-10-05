import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavigationComponent } from './components/template/navigation/navigation.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { MoviesComponent } from './views/movies/movies.component';
import { SeriesComponent } from './views/series/series.component';
import { MovieCreateComponent } from './components/movie/movie-create/movie-create.component';
import { SerieCreateComponent } from './components/serie/serie-create/serie-create.component';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MovieIndexComponent } from './components/movie/movie-index/movie-index.component';
import {MatTableModule} from '@angular/material/table';
import { MovieUpdateComponent } from './components/movie/movie-update/movie-update.component';
import { MovieDeleteComponent } from './components/movie/movie-delete/movie-delete.component';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    MoviesComponent,
    SeriesComponent,
    MovieCreateComponent,
    SerieCreateComponent,
    MovieIndexComponent,
    MovieUpdateComponent,
    MovieDeleteComponent,
    DialogComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
