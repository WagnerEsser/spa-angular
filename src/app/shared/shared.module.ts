import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ClickOutsideModule } from 'ng-click-outside';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PokemonListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    // bootstrap
    CollapseModule.forRoot(),

    // events
    ClickOutsideModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
