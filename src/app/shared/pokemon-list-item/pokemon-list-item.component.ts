import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PokemonListItemOptions } from 'src/app/shared/options/pokemon-list.options';
import { PokemonOptions } from 'src/app/shared/options/pokemon.options';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  resolvedData: PokemonOptions;
  @Input() pokemon: PokemonListItemOptions;
  @Input() pokemonId: number;
  @Input() resolvedPokemon: PokemonOptions;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    if (this.resolvedPokemon) {  // se veio pokémon pronto
      this.resolvedData = this.resolvedPokemon;
    }
    if (this.pokemon) {  // se veio da lista principal e precisa ser resolvida
      this.pokemonService.getPokemonFromUrl(this.pokemon.url).subscribe(
        value => this.resolvedData = value
      );
    }
  }
}
