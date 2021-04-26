import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.css']
})
export class HeroesHomeComponent implements OnInit {
  
  heroes: Hero[] = []

  constructor(private _heroesServices: HeroesService) {}

  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();
  }

  getList($event) {
    if($event) {
      this.heroes = this._heroesServices.getHeroes();
    }
  }

  getListSearch($event) {
    this.heroes = this._heroesServices.searchHeroes($event);
  }

}
