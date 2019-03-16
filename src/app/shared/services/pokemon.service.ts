import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokemonListItemOptions } from '../options/pokemon-list-item.options';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(): Observable<PokemonListItemOptions[]> {
    return this.http.get<PokemonListItemOptions[]>(this.url);
  }
}
