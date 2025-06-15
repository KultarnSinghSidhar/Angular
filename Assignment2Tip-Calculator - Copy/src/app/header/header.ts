import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuModule } from '@angular/material/menu';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenu,
    RouterLink,
    MatMenuModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  title: String = "Tip Calculator"
}
