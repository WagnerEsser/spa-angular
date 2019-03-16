import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  providers: [
    PokemonListResolver,
    PokemonDetailResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
