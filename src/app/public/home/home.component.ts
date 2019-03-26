import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonListOptions } from 'src/app/shared/options/pokemon-list.options';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokemonList: PokemonListOptions[];
  currentPage: number;
  previousPage: number;
  nextPage: number;
  fisrtLoading: boolean = true;

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    // load da página --> buscar lista do resolver
    this.router.data.subscribe(data => {
      this.pokemonList = data.pokemonList;
      this.router.queryParams.subscribe(params => this.updatePage(+params.page));
    });

    // para quando alterar a página --> buscar lista direto do service
    this.router.queryParams.subscribe(params => {

      if (this.fisrtLoading) {  // ignorar o subscribe no load da página
        this.fisrtLoading = false;
        return;
      }

      this.updatePokemons(+params.page);
      this.updatePage(+params.page);  // atualiza a paginação
      window.scroll(0,0);
    });
  }

  updatePokemons(page: number) {
    this.pokemonService.getPokemons(page).subscribe((list) => {
      this.pokemonList = list;  // atualiza a lista de pokémons
    });
  }

  updatePage(page: number) {
    this.currentPage = page > 0 ? page : 1;
    this.nextPage = page >= 2 ? page + 1 : 2;
    this.previousPage = page >= 2 ? page - 1 : 0;
  }
}
