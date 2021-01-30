import { Component, OnInit } from '@angular/core';
import { MovieservicesService } from 'src/app/services/movieservices.service';
import { MainGenre } from '../../models/mainGenre';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  genreList:MainGenre[];
  movieData:any[];
  constructor(private movieService: MovieservicesService) { }

  ngOnInit(): void {
    this.movieService.getGenreList().subscribe(res=>{
     this.genreList=res.genres;
    });
  }

  getMoviesByGenre(id){
    this.movieService.getMoiveListbyGenre(id).subscribe(res=>{
      this.movieData=res.results;
    })
  }

}
