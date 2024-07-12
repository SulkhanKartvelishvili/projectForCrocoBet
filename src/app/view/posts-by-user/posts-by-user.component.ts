import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../core/http/postsService/posts.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-posts-by-user',
  templateUrl: './posts-by-user.component.html',
  styleUrl: './posts-by-user.component.css'
})
export class PostsByUserComponent implements OnInit {
  userId!: any;
  postsList:any =[];
  usersPostsList:any = [];
  constructor(private postsServ:PostsService, private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((response) => {
      this.userId = response["userId"];
   
    })

    this.postsServ.getPosts().subscribe(posts => {
      this.postsList = posts;
      this.postsList.forEach((post:any) => {
        if(this.userId == post.userId){
          this.usersPostsList.push(post);
        }
      });
      
    });
  
  }


}
