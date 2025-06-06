import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-footer.html',
  styleUrl: './my-footer.css'
})
export class MyFooter{

  name: string = "Kultarn Singh";
  date: Date = new Date();
  }
