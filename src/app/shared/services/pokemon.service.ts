import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PokemonListOptions } from '../options/pokemon-list.options';
import { PokemonOptions } from '../options/pokemon.options';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(
    private http: HttpClient
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
}
