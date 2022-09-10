import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { VideosComponent } from '../videos/videos.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  categories: any[] = []
  category_selected: number = 0;
  category_selected_name = '';

  constructor( private http:DatabaseService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.http.getCategories('getCategories')
      .subscribe( (resp: any) => {
        this.categories = resp['response'];
    });
  }

  getSelectedCategory( cat: number ){
    this.category_selected = cat;
    let n = this.categories.filter( x => x.category_id === cat );
    this.category_selected_name = n[0]['category_name'];
  }


}
