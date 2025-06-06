import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyHeader} from './my-header/my-header';
import {MyCards} from './my-cards/my-cards';
import {MyFooter} from './my-footer/my-footer';

@Component({
  selector: 'app-root',
  imports: [MyHeader, MyCards, MyFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Assignment1-Cards';
}
