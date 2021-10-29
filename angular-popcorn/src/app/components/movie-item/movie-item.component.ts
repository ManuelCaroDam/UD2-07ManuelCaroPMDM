import { Component, Input, OnInit } from '@angular/core';
import { DialogMovieDetailComponent } from 'src/app/dialogs/dialog-movie-detail/dialog-movie-detail.component';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movieInput!: Movie;
  dialog: any;

  constructor() { }

  ngOnInit(): void {
  }

  openDialogPokemonDetail() {
    this.dialog.open(DialogMovieDetailComponent, {
      height: '400px',
      width: '300px',
      data: { pokemonName: this.movieInput?.title }
    });
  }

}
