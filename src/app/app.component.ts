import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post = {
    title: 'Title',
    isFavorite: false
  };
  tweet = {
    likesCount: 10,
    isLiked: true
  };
  courses = [
    { id: 1, name: 'course1' },
    { id: 1, name: 'course2' },
    { id: 1, name: 'course3' },
    { id: 1, name: 'course4' }
  ];
  onFavouriteChange(eventArgs: FavouriteChangedEventArgs) {
    console.log('Event Changed...', eventArgs);
  }
  onAdd() {
    this.courses.push({ id: 5, name: 'course5'});
  }
  onRemove(course) {
    // tslint:disable-next-line:prefer-const
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}
