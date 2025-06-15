import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    DatePipe
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  Name: String = "Kultarn Singh";
  Date: Date = new Date();

  constructor() {
    setInterval(() => {
      this.Date = new Date();
    }, 1000);
  }
}
