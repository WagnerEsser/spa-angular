import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ClickOutsideModule } from 'ng-click-outside';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PaginationComponent,
    FavoriteComponent,
    PokemonListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    // bootstrap & font-awesome
    AngularFontAwesomeModule,
    CollapseModule.forRoot(),

    // events
    ClickOutsideModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PaginationComponent,
    FavoriteComponent,
    PokemonListItemComponent
  ]
})
export class SharedModule { }
