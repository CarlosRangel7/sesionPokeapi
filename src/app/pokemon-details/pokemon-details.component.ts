import { Component, OnInit, Input, Inject } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'poke-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
    enlace: string = '';
    namePokemon: string = '';
    pokemonDetalles: any = [];
    constructor(
        @Inject(DOCUMENT) document: any,
        private pokeService: PokeapiService,
        private _route: ActivatedRoute,
        private _router: Router){
            this.enlace = document.location.href;
            this.namePokemon = this.enlace.substring(30, this.enlace.length);
            
            console.log(this.namePokemon);
    }


    ngOnInit(): void {
        this.pokeService.GetAPokemon(this.namePokemon).subscribe(pokeResult => {
            this.pokemonDetalles = pokeResult;
            console.log(this.pokemonDetalles);
        })
        
    }

    regresar(){
        this._router.navigate(['/Pokemons'])
    }

}
