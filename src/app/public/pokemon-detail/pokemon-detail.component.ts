import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonOptions } from 'src/app/shared/options/pokemon.options';
import { PokemonStorageService } from 'src/app/shared/services/pokemon-storage.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonOptions;
  pokemonFavorite: boolean;

  // foto ilustrativa
  photo = '../../../assets/bulbasaur.png';

  // se não existir foto, usar esta
  notFound = '../../../assets/sem-imagem.jpg';

  constructor(
    private router: ActivatedRoute,
    private pokemonStorageService: PokemonStorageService
  ) { }

  ngOnInit() {
    this.pokemon = this.router.snapshot.data.pokemon;

    const pokemonFavorites = this.pokemonStorageService.get('favorites');
    if (pokemonFavorites.includes(this.pokemon.id)) {
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
