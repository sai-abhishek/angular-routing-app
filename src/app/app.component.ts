import { Location } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation], // TODO : not working - study animations
})
export class AppComponent {
  constructor(
    private location: Location,
    private contexts: ChildrenOutletContexts
  ) {}

  title = 'angular-routing-app';
  angularVersion = VERSION.full;
  appVersion = 0.0;
  isLoggedIn = false;

  goBack() {
    this.location.back();
  }

  goForward() {
    this.location.forward();
  }

  getAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
