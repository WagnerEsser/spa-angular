import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { PokemonListOptions } from 'src/app/shared/options/pokemon-list.options';


@Injectable()
export class HomeResolver implements Resolve<Observable<PokemonListOptions[]>> {

    constructor(
        private pokemonService: PokemonService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<PokemonListOptions[]> {
        return this.pokemonService.getPokemons(route.params.page);
    }
}
