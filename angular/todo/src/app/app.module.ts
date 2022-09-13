import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [  // register components, directives, pipes etc
    AppComponent
  ],
  imports: [  //dependency modules or helper/utility modules
    BrowserModule, FormsModule
  ],
  providers: [],  // register & Launch angular services (injectables)
  bootstrap: [AppComponent] // load an angular component
})
export class AppModule { }

// registry & loader -
