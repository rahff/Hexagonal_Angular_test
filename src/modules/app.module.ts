import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../infrastructure/views/app.component';
import { AppRoutingModule } from '../infrastructure/routes/app-routing.module';
import { NewsFeedStoreModule } from './newsFeedStore.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsFeedStoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
