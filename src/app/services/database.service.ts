import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  url = 'http://localhost:5000/'

  constructor( private http: HttpClient  ) { }

  getQuery(query: string): string{
    return this.url + query;
  }

  getCategories( endpoint: any ){
    return this.http.get(this.getQuery( endpoint ), {});
  }

  getVideosCategory( endpoint: any ){
    console.log( this.getQuery( endpoint ) );
    return this.http.get(this.getQuery( endpoint ), {});
  }
  

}
