import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { PokemonListResolver } from './public/pokemon-list/pokemon-list.resolver';
import { PokemonDetailResolver } from './public/pokemon-detail/pokemon-detail.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

    SharedModule,
    PublicModule,

    // bootstrap & font-awesome
    AngularFontAwesomeModule,
    CollapseModule.forRoot(),
  ],
  providers: [
    PokemonListResolver,
    PokemonDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
