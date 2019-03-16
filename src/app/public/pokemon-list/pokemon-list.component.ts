import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonList = [];

  // se não existir foto, usar esta
  photo = '../../../assets/sem-imagem.jpg';

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.pokemonList = this.router.snapshot.data.pokemonList.results;
  }

}
