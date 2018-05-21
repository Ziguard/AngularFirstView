import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }     from './app.component';
import { AppRoute } from './app.routing';
import { FooterModule }     from './footer/footer.module';
import { HeaderModule }     from './header/header.module';
import { HomeModule }       from './home/home.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoute,
    HeaderModule,
    FooterModule,
    HomeModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
