import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ModalManager } from 'ngb-modal';

import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../models/hero';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent {

  @Input() heroes: Hero;
  @Output() refresh = new EventEmitter;
  @ViewChild('deleteModal') deleteModal;
  private modalRef;
  p:number = 1;

  hero:Hero;

  constructor(
    private _heroesService: HeroesService,
    private _routerService: Router,
    private toastr: ToastrService,
    private modalService: ModalManager,
    private translate: TranslateService
  ) { }

  editHero(heroEdit: Hero) {
    this._routerService.navigate(['/hero-edit', heroEdit.id]);
  }

  deleteHero() {
    this._heroesService.deleteHero(this.hero);
    this.refresh.emit(true);
    this.closeModal();
    this.toastr.success(this.translate.instant('Hero successfully deleted'));
  }

  openDeleteModal(hero){
    this.hero = hero;
    this.modalRef = this.modalService.open(this.deleteModal, {
        size: "md",
        modalClass: 'deleteModal',
        hideCloseButton: true,
        centered: false,
        animation: false,
        closeOnOutsideClick: true,
    })
  }
  closeModal(){
    this.modalService.close(this.modalRef);
  }

}
