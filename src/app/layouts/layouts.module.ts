import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { GaleryComponent } from './galery/galery.component';





@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    GaleryComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    GaleryComponent
  ],
})
export class LayoutsModule { }
