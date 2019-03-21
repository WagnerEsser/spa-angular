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


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    PaginationComponent,
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
  ]
})
export class SharedModule { }
