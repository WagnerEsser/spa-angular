import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { PokemonOptions } from 'src/app/shared/options/pokemon.options';


@Injectable()
export class PokemonDetailResolver implements Resolve<Observable<PokemonOptions>> {

    constructor(
        private pokemonService: PokemonService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<PokemonOptions> {
        return this.pokemonService.getById(route.params.id);
    }
}
