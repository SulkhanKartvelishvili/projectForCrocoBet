import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private getUsersApi:string = "https://jsonplaceholder.typicode.com/users";


  constructor(private httpClient:HttpClient) { 
  }

  getUsers():Observable<any>{
      
    return this.httpClient.get(this.getUsersApi);
  }

}
