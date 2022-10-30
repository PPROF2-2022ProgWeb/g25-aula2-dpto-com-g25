import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PagesModule } from './pages/pages.module'
import { LayoutsModule } from './layouts/layouts.module';
import { AuthInterceptor } from './services/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LayoutsModule,
    PagesModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [AuthInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
