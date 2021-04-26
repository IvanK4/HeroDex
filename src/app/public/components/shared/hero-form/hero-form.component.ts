import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { HeroesService } from 'src/app/public/services/heroes.service';
import { Hero } from 'src/app/public/models/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  hero: Hero;
  heroForm: FormGroup;
  incompleteForm: boolean = false;

  @Input() titleForm: string;
  @Input() isAddHeroForm: boolean;
  
  @Output() sendAddHeroForm = new EventEmitter;
  @Output() sendEditHeroForm = new EventEmitter;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesServices: HeroesService,
  ) {
    this.activatedRoute.params.subscribe( params => {
      this.hero = this._heroesServices.getEditHero( params['id']);
    })
    this.heroForm = this.createFormGroup();
  }

    createFormGroup() {
      if(this.hero !== undefined) {
        return new FormGroup({
          name: new FormControl(this.hero.name, Validators.required),
          franchise: new FormControl(this.hero.franchise,  Validators.required),
          year: new FormControl(this.hero.year,  Validators.required),
        });
      } else {
        return new FormGroup({
          name: new FormControl('', Validators.required),
          franchise: new FormControl('',  Validators.required),
          year: new FormControl('',  Validators.required),
        });
      }
  }

  onSaveForm() {
    if (this.heroForm.invalid) {
      this.incompleteForm = true;
      return;
    }
    
    this.incompleteForm = false;

    if(this.isAddHeroForm) {
      this.addHero();
    } else {
      this.editHero();
    }
  }

  addHero() {
    this.sendAddHeroForm.emit(this.heroForm.value);
  }

  editHero() {
    this.sendEditHeroForm.emit(this.heroForm.value);
  }

}