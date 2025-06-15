import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-processing',
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './processing.html',
  styleUrl: './processing.css'
})

export class Processing implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/output']);
    }, 3000);
  }
}
