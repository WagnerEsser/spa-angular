import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './public/pokemon-detail/pokemon-detail.component';
import { ContactComponent } from './public/contact/contact.component';
import { PokemonDetailResolver } from './public/pokemon-detail/pokemon-detail.resolver';
import { HomeResolver } from './public/home/home.resolver';
import { PokemonFavoritesComponent } from './public/pokemon-favorites/pokemon-favorites.component';
import { PokemonFavoritesResolver } from './public/pokemon-favorites/pokemon-favorites.resolver';

const routes: Routes = [
  { path: '404', component: PageNotFoundComponent },
  {
    path: 'home',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        resolve: {
          pokemonList: HomeResolver
        },
      },
      {
        path: 'page/:page',
        component: HomeComponent,
        resolve: {
          pokemonList: HomeResolver
        },
      },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  {
    path: 'pokemon/:id',
    component: PokemonDetailComponent,
    resolve: {
      pokemon: PokemonDetailResolver
    }
  },
  {
    path: 'favorites',
    component: PokemonFavoritesComponent,
    resolve: {
      pokemonList: PokemonFavoritesResolver
    }
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
