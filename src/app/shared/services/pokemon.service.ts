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
    console.log(page);
    let limitByPage = 40;
    page--;
    let parameters = page > 0 ? `?offset=${page * limitByPage}&limit=${limitByPage}` : `?limit=${limitByPage}`;
    
    this.url = this.url + parameters;
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
