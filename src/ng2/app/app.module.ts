import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { RouterModule, UrlHandlingStrategy } from '@angular/router';

import { UpgradeModule, downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import { Ng2DemoComponent } from "ng2/app/ng2-demo.component";
import { phoneServiceProvider } from "ng2/app/phone.service";

import { TestDateService } from 'ng2/app/services/test-date.service'

declare var angular: any;

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith("/ng2-route") || url.toString() == "/"
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

angular.module('phonecatApp')
  .directive(
    'ng2Demo',
    downgradeComponent({ component: Ng2DemoComponent })
  )
  .factory("testDateService", downgradeInjectable(TestDateService))


@NgModule({
  declarations: [
    AppComponent,
    Ng2DemoComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ng2-route'
      },
      {
        path: 'ng2-route',
        component: Ng2DemoComponent
      }
    ],
      {
        useHash: true,
        enableTracing: true
      }
    )
  ],
  entryComponents: [
    Ng2DemoComponent // Don't forget this!!!
  ],
  providers: [
    phoneServiceProvider,
    TestDateService,
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  /*
    constructor(private upgrade: UpgradeModule) { }
    ngDoBootstrap() {
      this.upgrade.bootstrap(document.body, ['phonecatApp'], { strictDi: true });
    }
  */
}

