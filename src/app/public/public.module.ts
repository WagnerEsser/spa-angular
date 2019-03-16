import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PageNotFoundComponent,
    ContactComponent,
    PokemonListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    // bootstrap & font-awesome
    AngularFontAwesomeModule,
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent,
    PokemonListItemComponent
  ],
})
export class PublicModule { }
