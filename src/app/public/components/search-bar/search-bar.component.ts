import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() sendSearch = new EventEmitter;

  constructor() {}

  searchHero( hero: string ): void {
    this.sendSearch.emit(hero)
  }

}