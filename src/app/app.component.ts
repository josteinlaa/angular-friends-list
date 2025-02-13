import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  constructor(private cdr: ChangeDetectorRef) {}

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addToFavs(p: string): void {
    if (!this.favorites.includes(p)) {
      this.favorites.push(p);
      this.cdr.detectChanges();
    }
  }

  deleteFromFavs(p: string) {
    this.favorites = this.favorites.filter(a => a !== p);
    this.cdr.detectChanges();
  }

  isInFavs(p: string): boolean {
    console.log(this.favorites.includes(p), this.favorites, p);
    return this.favorites.includes(p);
  }
}
