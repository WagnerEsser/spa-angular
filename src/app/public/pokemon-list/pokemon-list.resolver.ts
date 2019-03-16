import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { PokemonListItemOptions } from 'src/app/shared/options/pokemon-list-item.options';


@Injectable()
export class PokemonListResolver implements Resolve<Observable<PokemonListItemOptions[]>> {

    constructor(
        private pokemonService: PokemonService
    ) { }

    resolve(): Observable<PokemonListItemOptions[]> {
        return this.pokemonService.getPokemons();
    }
}
