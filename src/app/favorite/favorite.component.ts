import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {


  // tslint:disable-next-line:no-input-rename
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter;

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite});
  }

}
export interface FavouriteChangedEventArgs {
  newValue: boolean;
}
