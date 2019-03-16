import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './public/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './public/pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './public/pokemon-list/pokemon-list.component';
import { ContactComponent } from './public/contact/contact.component';
import { PokemonListResolver } from './public/pokemon-list/pokemon-list.resolver';

const routes: Routes = [
  { path: '404', component: PageNotFoundComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  {
    path: 'pokemon',
    children: [
      {
        path: 'list',
        component: PokemonListComponent,
        resolve: {
          pokemonList: PokemonListResolver
        }
      },
      {
        path: ':id',
        component: PokemonDetailComponent
      }
    ]
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
