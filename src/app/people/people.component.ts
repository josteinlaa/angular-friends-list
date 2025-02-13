import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input() name: string = '';
  @Input() isFav: boolean = false;
  @Output() addToFavs: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteFromFavs: EventEmitter<string> = new EventEmitter<string>();

  onAddToFavs(p: string) {
    this.addToFavs.emit(p);
  }

  onDeleteFromFavs(p: string) {
    this.deleteFromFavs.emit(p);
  }
}
