import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './view/users/users.component';
import { PostsComponent } from './view/posts/posts.component';
import { PostsByUserComponent } from './view/posts-by-user/posts-by-user.component';
import { AppComponent } from './app.component';
import { TodosByUserComponent } from './view/todos-by-user/todos-by-user.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },
{ path: 'postsByUser/:userId', component: PostsByUserComponent },
{ path: 'todosByUser/:userId', component: TodosByUserComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
