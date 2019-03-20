import { Component, OnInit, Input } from '@angular/core';

import { PokemonListItemOptions } from 'src/app/shared/options/pokemon-list.options';
import { PokemonOptions } from 'src/app/shared/options/pokemon.options';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: PokemonListItemOptions;
  @Input() pokemonId: number;
  resolvedData: PokemonOptions;

  // se não existir foto, usar esta
  notFound = '../../../assets/sem-imagem.jpg';

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService
      .getPokemonFromUrl(this.pokemon.url)
      .subscribe(
        value => this.resolvedData = value,
        error => console.log('tratamento de erros...')
      );
  }
}
