import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestDateService {

  constructor() {
    console.log(new Date());
  }

  getDate(): Date {
    return new Date();
  }
}
