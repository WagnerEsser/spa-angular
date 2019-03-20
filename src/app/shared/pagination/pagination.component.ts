import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { PokemonListOptions } from '../options/pokemon-list.options';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pokemonList: PokemonListOptions;
  private anterior = null
  private proximo = null

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(
      resposta => {
        console.log(resposta);
        // this.anterior = resposta.next;
        // this.proximo = resposta.next;
      }
    )
  }

}
