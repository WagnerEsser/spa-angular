import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PokemonListItemOptions } from 'src/app/shared/options/pokemon-list.options';
import { PokemonOptions } from 'src/app/shared/options/pokemon.options';
import { PokemonService } from 'src/app/shared/services/pokemon.service';
import { elementEnd } from '@angular/core/src/render3';
import { PokemonStorageService } from 'src/app/shared/services/pokemon-storage.service';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  resolvedData: PokemonOptions;
  @Input() pokemon: PokemonListItemOptions;
  @Input() pokemonId: number;
  pokemonFavorite: boolean;

  constructor(
    private pokemonService: PokemonService,
    private pokemonStorageService: PokemonStorageService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonFromUrl(this.pokemon.url).subscribe(
      value => this.resolvedData = value
    );

    const pokemonFavorites = this.pokemonStorageService.get('favorites');
    if (pokemonFavorites.includes(this.pokemonId)) {
      this.pokemonFavorite = true;
    }
  }

  favorite(pokemonId: number) {
    let pokemonFavorites = this.pokemonStorageService.get('favorites');

    if (pokemonFavorites.includes(pokemonId)) {
      pokemonFavorites = this.pokemonStorageService.remove(pokemonFavorites, pokemonId);
      this.pokemonFavorite = false;
    } else {
      pokemonFavorites = this.pokemonStorageService.add(pokemonFavorites, pokemonId);
      this.pokemonFavorite = true;
    }

    this.pokemonStorageService.save('favorites', pokemonFavorites);
  }
}
