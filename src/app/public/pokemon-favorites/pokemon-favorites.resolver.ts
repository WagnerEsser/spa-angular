import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { PokemonOptions } from 'src/app/shared/options/pokemon.options';


@Injectable()
export class PokemonFavoritesResolver implements Resolve<PokemonOptions[]> {

    constructor(
        private pokemonService: PokemonService
    ) { }

    resolve(): PokemonOptions[] {
        return this.pokemonService.getPokemonsFromStorage();
    }
}
