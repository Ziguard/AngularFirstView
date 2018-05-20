import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app.routing';
import { FooterModule }     from './footer/footer.module';
import { HeaderModule }     from './header/header.module';
import { HomeModule }       from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HomeModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
