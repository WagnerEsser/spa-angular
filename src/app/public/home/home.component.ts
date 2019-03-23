import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonListOptions } from 'src/app/shared/options/pokemon-list.options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonList: PokemonListOptions[];

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pokemonList = this.router.snapshot.data.pokemonList;
  }

}
