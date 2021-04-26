import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngb-modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { HeroesService } from './public/services/heroes.service';

import { AppComponent } from './app.component';
import { HeroTableComponent } from './public/components/hero-table/hero-table.component';
import { HeroAddComponent } from './public/components/hero-add/hero-add.component';
import { HeroEditComponent } from './public/components/hero-edit/hero-edit.component';
import { HeroesHomeComponent } from './public/components/heroes-home/heroes-home.component';
import { NavbarComponent } from './public/components/shared/navbar/navbar.component';
import { HeroFormComponent } from './public/components/shared/hero-form/hero-form.component';
import { SearchBarComponent } from './public/components/search-bar/search-bar.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeroTableComponent,
    HeroAddComponent,
    HeroEditComponent,
    HeroesHomeComponent,
    NavbarComponent,
    HeroFormComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      },
    }),
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }