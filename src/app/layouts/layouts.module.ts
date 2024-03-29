import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { GaleryComponent } from './galery/galery.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    GaleryComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    GaleryComponent,
    CarrouselComponent
  ],
})
export class LayoutsModule { }
