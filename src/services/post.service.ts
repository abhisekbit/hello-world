import { DataService } from './data.servive';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PostService extends DataService {

  // private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }

  /* getPosts() {
    return this.http.get(this.url)
    .catch(this.handleError);
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
    .catch(this.handleError);
  }
  updatePost(post) {
    return this.http.patch( this.url + '/' + post.id, JSON.stringify({ isRead: true}))
    .catch(this.handleError);
  }
  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    // tslint:disable-next-line:curly
    if (error.status === 404)
        return Observable.throw(new NotFoundError());
    // tslint:disable-next-line:curly
    if (error.status === 400)
      return Observable.throw(new BadRequestError(error.json()));
    return Observable.throw(new AppError(error.json()));
  } */




}
