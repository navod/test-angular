import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {DataLayerService} from './dataLayer.service';
import {GoogleAnalyticsService} from "ngx-google-analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-app';

  constructor(
    private _router: Router,
    private _dataLayerService: DataLayerService,
    private ga: GoogleAnalyticsService
  ) {
    this._router.events.subscribe((event) => {
      // subscribe to router events
      if (event instanceof NavigationEnd) {
        //if our event is of our interest
        this._dataLayerService.logPageView(event.url); //call our dataLayer service's page view method to ping home with the url value.
      }
    });
  }

  testbutton1Click() {
    console.log('test1 btn clicked123234..!');
    //call the service's logEvent method
    // this._dataLayerService.logEvent(
    //   "ButtonClicked",
    //   "Buttons",
    //   "Clicked",
    //   "Test1Btn"
    // );
    this.ga.event('submit', 'user_register_form', undefined,undefined,undefined,{
      userId:'U001'
    })

    // continue with logic for what needs to be done in this method.
  }

  testbutton2Click() {
    console.log('test2 btn clicked..!');
    //call the service's logEvent method
    this._dataLayerService.logEvent(
      "ButtonClicked",
      "Buttons",
      "Clicked",
      "Test2Btn"
    );

    // continue with logic for what needs to be done in this method.
  }
}
