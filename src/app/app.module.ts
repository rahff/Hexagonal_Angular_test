import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from './store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
