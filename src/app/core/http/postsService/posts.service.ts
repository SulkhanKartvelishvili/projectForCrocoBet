import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private getPostsApi:string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient:HttpClient) { 
  }

  getPosts():Observable<any>{
      
    return this.httpClient.get(this.getPostsApi);
  }
  

}
