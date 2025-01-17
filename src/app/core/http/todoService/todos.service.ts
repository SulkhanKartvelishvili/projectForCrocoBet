import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  
  private getTodosApi:string = "https://jsonplaceholder.typicode.com/todos";


  constructor(private httpClient:HttpClient) { 
  }

  getTodos():Observable<any>{
      
    return this.httpClient.get(this.getTodosApi);
  }
}
