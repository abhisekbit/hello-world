import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  ngOnInit() {
    this.service.getPosts()
    .subscribe(
      response => {
      this.posts = response.json() ;
      },
      error => {
        alert('Unexpected error occured');
        console.log(error);
      });
  }

  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    // tslint:disable-next-line:prefer-const
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
        .subscribe(
          response => {
          post['id'] = response.json().id;
          this.posts.splice(0, 0, post);
          },
          (error: AppError) => {
            // tslint:disable-next-line:curly
            if (error instanceof BadRequestError)
              alert('Bad Request Error');
            else {
              alert('Unexpected error occured');
              console.log(error);
            }
          });
  }
  updatePost(post) {
    this.service.updatePost(post)
        .subscribe(
          resposne => {
            console.log(resposne.json());
          },
          error => {
            alert('Unexpected error occured');
            console.log(error);
          });
  }
  deletePost(post) {
    this.service.deletePost(post.id)
        .subscribe(
          response => {
          // tslint:disable-next-line:prefer-const
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
          },
          (error: AppError) => {
            // tslint:disable-next-line:curly
            if (error instanceof NotFoundError)
              alert('This post has already been deleted');
            else {
              alert('Unexpected error occured');
              console.log(error);
            }
          });
  }


}
