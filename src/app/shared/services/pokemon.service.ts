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

  getPokemons(page: number = null): Observable<PokemonListOptions[]> {
    page--;
    const limitByPage = 40;
    const offset = page > 0 ? page * limitByPage : '';

    this.url = this.url + `?offset=${offset}&limit=${limitByPage}`;
    return this.http.get<PokemonListOptions[]>(this.url);
  }

  getById(id: number): Observable<PokemonOptions> {
    this.url = this.url + id;
    return this.http.get<PokemonOptions>(this.url);
  }

  getPokemonFromUrl(url: string): Observable<PokemonOptions> {
    return this.http.get<PokemonOptions>(url);
  }
}
