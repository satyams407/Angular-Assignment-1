import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';

//
@NgModule({
  //so that angular can locate the selector
  declarations: [
    AppComponent,
    HelloworldComponent,
  ],

  // to import the angular library
  imports: [
    BrowserModule
  ],
  providers: [],  //add services here
  bootstrap: [AppComponent] //staring component to get started
})
export class AppModule { }
