import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../core/http/postsService/posts.service';
import { UsersService } from '../../core/http/usersService/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  postsList:any = [];
  usersList:any = [];
  selectedPost:any;
  isModalOpen: boolean = false;
  

  
constructor(private postsServ:PostsService, private usersServ:UsersService){}
ngOnInit(): void {
  this.readPosts();
  this.readUsers();
}

readPosts(){
  this.postsServ.getPosts().subscribe(posts => {
    this.postsList = posts;
  });
}
readUsers(){
  this.usersServ.getUsers().subscribe(users => {
    this.usersList = users;
  });
}
openPostDetails(postData:any){
  this.selectedPost = postData;
  this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
  }




}
