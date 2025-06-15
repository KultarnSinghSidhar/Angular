import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tipService } from '../tip-service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './input.html',
  styleUrls: ['./input.css']
})
export class InputPage {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    cost: new FormControl<number | null>(null, [Validators.required, Validators.min(0.01)]),
    serviceType: new FormControl('', Validators.required),
    quality: new FormControl('Good', Validators.required),
    roundUp: new FormControl(false),
    date: new FormControl<Date | null>(null, Validators.required),
    notes: new FormControl('')
  });

  constructor(private router: Router) {}

  submitForm() {
    if (this.form.valid) {
      const qualityPercent = this.getQualityPercent(this.form.value.quality ?? 'Good');
      tipService.setData({
        name: this.form.value.name ?? '',
        cost: this.form.value.cost ?? 0,
        serviceType: this.form.value.serviceType ?? '',
        qualityPercent,
        roundUp: this.form.value.roundUp ?? false,
        date: this.form.value.date ?? new Date(),
        notes: this.form.value.notes ?? ''
      });
      this.router.navigate(['/processing']);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private getQualityPercent(quality: string): number {
    switch (quality) {
      case 'Okay': return 0.15;
      case 'Good': return 0.18;
      case 'Excellent': return 0.20;
      default: return 0.18;
    }
  }
}
