import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/shared_components/header/header.component';
import { NavigationComponent } from './shared/shared_components/navigation/navigation.component';
import { UsersComponent } from './view/users/users.component';
import { PostsComponent } from './view/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsByUserComponent } from './view/posts-by-user/posts-by-user.component';
import { PostDetailsComponent } from './shared/shared_components/post-details/post-details.component';
import { TodosByUserComponent } from './view/todos-by-user/todos-by-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    UsersComponent,
    PostsComponent,
    PostsByUserComponent,
    PostDetailsComponent,
    TodosByUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
