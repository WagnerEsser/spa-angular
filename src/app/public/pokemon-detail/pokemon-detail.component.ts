import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonOptions } from 'src/app/shared/options/pokemon.options';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.sass']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: PokemonOptions;

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pokemon = this.router.snapshot.data.pokemon;
  }

}
