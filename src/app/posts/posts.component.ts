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
    this.service.getAll()
    .subscribe(posts => this.posts = posts);
  }

  constructor(private service: PostService) {
  }

  createPost(input: HTMLInputElement) {
    // tslint:disable-next-line:prefer-const
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';
    this.service.create(post)
        .subscribe(
          newPost => {
          post['id'] = newPost.id;
          },
          (error: AppError) => {
            this.posts.splice(0, 1);
            // tslint:disable-next-line:curly
            if (error instanceof BadRequestError)
              alert('Bad Request Error');
            // tslint:disable-next-line:curly
            else throw error ;
          });
  }
  updatePost(post) {
    this.service.update(post)
        .subscribe(
          updatedPost => {
            console.log(updatedPost);
          });
  }
  deletePost(post) {
    // tslint:disable-next-line:prefer-const
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id)
        .subscribe(
          null,
          (error: AppError) => {
            this.posts.splice(index, 0, post);
            // tslint:disable-next-line:curly
            if (error instanceof NotFoundError)
              alert('This post has already been deleted');
            // tslint:disable-next-line:curly
            else throw error ;
          });
  }


}
