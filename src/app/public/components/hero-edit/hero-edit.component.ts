import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent {

  titleForm = this.translate.instant('Edit Hero');

  hero: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesServices: HeroesService,
    private _routerService: Router,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.hero = this._heroesServices.getEditHero( params['id']);
    })
  }

  editHero($event) {
    this._heroesServices.editHero($event, this.hero);
    this._routerService.navigate(['/heroes'])
    this.toastr.success(this.translate.instant('Hero correctly edited'));
  }

}