import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  @Input() category: any;
  @Input() category_name = ''
  videos: any[] = []

  constructor( private http:DatabaseService ) { 
    console.log( this.category );
  }

  ngOnInit(): void {
    this.getVideoxCategory( this.category )
  }

  getVideoxCategory( category: number){
    this.http.getVideosCategory('getVideoCategory/'+category)
      .subscribe( (resp: any) => {
        this.videos = resp['response'];
        console.log( this.videos );
    });
  }

}
