import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HomeComponent } from './home/home.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    HomeComponent,
    PokemonDetailComponent,
    PageNotFoundComponent,
    ContactComponent,
    PokemonListItemComponent,
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,

    // bootstrap & font-awesome
    AngularFontAwesomeModule,
  ],
  exports: [
    HomeComponent,
    PageNotFoundComponent,
    PokemonListItemComponent,
    FavoriteComponent
  ],
})
export class PublicModule { }
