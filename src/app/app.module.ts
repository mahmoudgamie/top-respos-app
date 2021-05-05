import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TopReposListComponent } from './top-repos-list/top-repos-list.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxUiLoaderModule } from "ngx-ui-loader";

import { DurationPipe } from './pipes/duration.pipe';

import { AppRoutingModule } from './app.routing.module'

@NgModule({
  declarations: [
    AppComponent,
    TopReposListComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    NgxUiLoaderModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
