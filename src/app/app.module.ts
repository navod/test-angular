import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxGoogleAnalyticsModule} from 'ngx-google-analytics';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Test1Component} from './test1/test1.component';
import {Test2Component} from './test2/test2.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, Test1Component, Test2Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgxGoogleAnalyticsModule.forRoot('G-GK6ZQ6JGQM')],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
