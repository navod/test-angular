import { Injectable } from '@angular/core';
import { AppInitService } from './app-init.service';

@Injectable({
  providedIn: 'root',
})
export class DataLayerService {
  private window;

  constructor(private _windowRef: AppInitService) {
    this.window = _windowRef.nativeWindow; // intialise the window to what we get from our window service
  }

  private pingHome(obj: any) {
    if (obj) this.window.dataLayer.push(obj);
  }

  //list of all our dataLayer methods

  logPageView(url: any) {
    const hit = {
      event: 'content-view',
      pageName: url,
    };
    this.pingHome(hit);
  }

  logEvent(event: any, category: any, action: any, label: any) {
    const hit = {
      event: event,
      category: category,
      action: action,
      label: label,
    };
    this.pingHome(hit);
  }

  logCustomDimensionTest(value: any) {
    const hit = {
      event: 'custom-dimension',
      value: value,
    };
    this.pingHome(hit);
  }

  // .. add more custom methods as needed by your app.
}
