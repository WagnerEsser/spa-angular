import { Component, OnInit } from '@angular/core';
import { PokemonOptions } from 'src/app/shared/options/pokemon.options';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-favorites',
  templateUrl: './pokemon-favorites.component.html',
  styleUrls: ['./pokemon-favorites.component.scss']
})
export class PokemonFavoritesComponent implements OnInit {
  pokemonList: PokemonOptions[];

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pokemonList = this.router.snapshot.data.pokemonList;
  }

}
