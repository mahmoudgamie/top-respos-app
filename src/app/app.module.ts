import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopReposListComponent } from './top-repos-list/top-repos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopReposListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
