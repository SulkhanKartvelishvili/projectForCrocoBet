import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../core/http/usersService/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  usersList:[]=[];
  searchQuery: string = '';

  constructor(private usersServ:UsersService){}
  ngOnInit(): void {
    this.readUsers();
  }
  readUsers(){
    this.usersServ.getUsers().subscribe((response:any) => {
      this.usersList = response;
      this.usersList = response.map((user:any) => ({
        ...user,
        lastName: this.extractLastName(user.name) 
      }));
    })
  }

 

  extractLastName(name: string): string {
    const parts = name.split(' ');
    return parts[parts.length - 1];
  }

  filteredUsers(): any[] {
    if (!this.searchQuery) {
      return this.usersList;
    }
    console.log(this.usersList);
    const lowerQuery = this.searchQuery.toLowerCase();
    return this.usersList.filter((user:any) =>
      user["name"].toLowerCase().includes(lowerQuery) ||
      user["company"]["name"].toLowerCase().includes(lowerQuery) ||
      user["email"].toLowerCase().includes(lowerQuery)
    );
  }
}
