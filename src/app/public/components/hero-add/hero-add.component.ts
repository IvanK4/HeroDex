import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent {

  titleForm = this.translate.instant('Add Hero');

  constructor(
    private _heroesServices: HeroesService,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {

  }

  addHero($event) {
    this._heroesServices.addHero($event);
    this.toastr.success(this.translate.instant('Hero successfully added'));
  }

}