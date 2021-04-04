import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';
import { LocationService } from './location.service';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
