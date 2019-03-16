import { Component, OnInit, Input } from '@angular/core';

import { PokemonListItemOptions } from 'src/app/shared/options/pokemon-list-item.options';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: PokemonListItemOptions;

  constructor() { }

  ngOnInit() {

  }

}
