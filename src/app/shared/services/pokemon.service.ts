import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PokemonListOptions } from '../options/pokemon-list.options';
import { PokemonOptions } from '../options/pokemon.options';
import { PokemonStorageService } from './pokemon-storage.service';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient,
    private storageService: PokemonStorageService
  ) { }

  getPokemons(): Observable<PokemonListOptions[]> {
    return this.http.get<PokemonListOptions[]>(this.url);
  }

  getById(id: number): Observable<PokemonOptions> {
    const url = this.url + id;
    return this.http.get<PokemonOptions>(url);
  }

  getPokemonFromUrl(url: string): Observable<PokemonOptions> {
    return this.http.get<PokemonOptions>(url);
  }

  getPokemonsFromStorage(): PokemonOptions[] {
    const storageList = this.storageService.get('favorites');
    const favoritesList: PokemonOptions[] = [];

    if (storageList) {
      storageList.forEach((id: number) => {
        // tens o ID do pokémon
        this.getById(id).subscribe(pokemon => {
          // tens o POKÉMON --> add na lista
          favoritesList.push(pokemon);
        });
      });
      return favoritesList;
    } else {
      return storageList;  // lista vazia
    }
  }
}
