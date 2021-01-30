import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieservicesService } from 'src/app/services/movieservices.service';

@Component({
  selector: 'app-moviedeatils',
  templateUrl: './moviedeatils.component.html',
  styleUrls: ['./moviedeatils.component.css']
})
export class MoviedeatilsComponent implements OnInit {
  movie_id:number;
  movieData:any[];
  constructor(private route: ActivatedRoute, private movieService: MovieservicesService) { }

  ngOnInit(): void {
    this.movie_id = this.route.snapshot.params.id;
    this.movieService.getMoiveDeatils(this.movie_id).subscribe(res=>{
      this.movieData=res;
    })
  }

}
