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
    this.router.data.subscribe(data => this.pokemonList = data.pokemonList);

    // tslint:disable-next-line:radix
    const page = parseInt(this.router.snapshot.params.page);
    this.pagination.nextPage = page >= 2 ? page + 1 : 2;
    this.pagination.previousPage = page >= 2 ? page - 1 : 0;
  }
}
