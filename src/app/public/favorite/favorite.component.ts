import { Component, OnInit, Input } from '@angular/core';
import { PokemonStorageService } from 'src/app/shared/services/pokemon-storage.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  pokemonFavorite: boolean;
  @Input() pokemonId: number;

  constructor(
    private pokemonStorageService: PokemonStorageService
  ) { }

  ngOnInit() {
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
