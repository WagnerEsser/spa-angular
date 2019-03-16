import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonListItemOptions } from 'src/app/shared/options/pokemon-list-item.options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonList: PokemonListItemOptions[];

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pokemonList = this.router.snapshot.data.pokemonList.results;
  }

}
