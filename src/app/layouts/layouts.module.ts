import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[

  NavbarComponent,
    FooterComponent,
    CarrouselComponent,
    CardsComponent

  ]
})
export class LayoutsModule { }
