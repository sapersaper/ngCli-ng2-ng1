import { Component, Inject } from '@angular/core';
import { PHONE_SERVICE } from "ng2/app/phone.service";
import { UpgradeModule } from "@angular/upgrade/static";

import { TestDateService } from "./services/test-date.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  phones: any[] = [];


  constructor(
    private upgrade: UpgradeModule,
    private testDateService: TestDateService
  ) { }

  ngOnInit() {
    this.upgrade.bootstrap(document.body, ['phonecatApp']);
    setTimeout(() => {
      console.log("ng2: ", this.testDateService.getDate())
    }, 3000);
  }
  /*
constructor(
  @Inject(PHONE_SERVICE) private phoneService: any) {
  }

  ngOnInit() {
    this.phones = this.phoneService.query();
  }
*/
}
