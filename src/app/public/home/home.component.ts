import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonListOptions } from 'src/app/shared/options/pokemon-list.options';
import { PaginationOptions } from 'src/app/shared/options/pagination.options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonList: PokemonListOptions[];
  pagination: PaginationOptions = {
    nextPage: undefined,
    previousPage: undefined
  };

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pokemonList = this.router.snapshot.data.pokemonList;
    let page = parseInt(this.router.snapshot.params.page);
    
    this.pagination.nextPage = page >= 2 ? page + 1 : 2;
    this.pagination.previousPage = page >= 2 ? page - 1 : null;

  }

}
