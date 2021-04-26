import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../models/hero';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class HeroesService {

    private heroes: Hero[] = [
        {
            id: uuidv4(),
            name: "Goku",
            franchise: "Dragon Ball",
            year: "1986"
        },
        {
            id: uuidv4(),
            name: "Levi Ackerman",
            franchise: "Ataque a los titanes",
            year: "2013"
        },
        {
            id: uuidv4(),
            name: "Daredevil",
            franchise: "Marvel",
            year: "1964"
        },
        {
            id: uuidv4(),
            name: "Solid Snake",
            franchise: "Metal gear",
            year: "1998"
        },
        {
            id: uuidv4(),
            name: "Jhon nieve",
            franchise: "Juego de tronos",
            year: "2011"
        },
        {
            id: uuidv4(),
            name: "Spider-Man",
            franchise: "Marvel",
            year: "1962"
        },  
        {
            id: uuidv4(),
            name: "Vegeta",
            franchise: "Dragon ball Z",
            year: "1986"
        }
    ];

    constructor(private _routerService: Router) {}

    getHeroes(): Hero[] {
        return this.heroes;
    }

    getHeroe(id:string): Hero {
        return this.heroes[id];
    }

    getIndexHeroe( heroe: Hero ): number {
        return this.heroes.indexOf(heroe);
    }

    getEditHero(heroEdit) {
        let filterHero: any;
        this.heroes.forEach(it => {
            if(it.id === heroEdit) {
                filterHero = it;
            }
        });
        return filterHero;
    }

    searchHeroes( wantedHero:string ): Hero[] {
        let heroesArr: Hero[] = new Array();
        if(wantedHero) {
            wantedHero = wantedHero.toLocaleLowerCase();
        }

        for(let heroe of this.heroes) {
            let heroName = heroe.name.toLocaleLowerCase();
            if (heroName.indexOf( wantedHero ) >= 0) {
                heroesArr.push( heroe )
            }
        }

        return heroesArr;
    }

    addHero(index: any) {
        let hero = {
            id: uuidv4(),
            name: index.name,
            franchise: index.franchise,
            year: index.year,
        };
        this.heroes.push(hero);
        this._routerService.navigate(['/heroes'])
    }

    editHero(index: any, i) {
        this.heroes.forEach(it => {
            if(it === i) {
                i.name = index.name;
                i.franchise = index.franchise;
                i.year = index.year
            }
        });
    }

    deleteHero(index: any) {
        let data = [];
        this.heroes.forEach(it => {
            if(it !== index) {
                data.push(it);
            }
        });
        this.heroes = data;
    }

}