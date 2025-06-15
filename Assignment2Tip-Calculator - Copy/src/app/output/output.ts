import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { tipService } from '../tip-service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import {DatePipe, DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    RouterLink,
    DatePipe,
    DecimalPipe
  ],
  templateUrl: './output.html',
  styleUrls: ['./output.css']
})
export class Output {
  currentDate: Date = new Date();
  data = tipService.getInputData();

  displayedColumns: string[] = [
    'name',
    'cost',
    'serviceType',
    'qualityPercent',
    'roundUp',
    'date',
    'notes',
    'tipAmount',
    'totalAmount'
  ];

  dataSource = this.data ? [this.data] : [];

  get tipAmount() {
    return tipService.getTipAmount();
  }

  get totalAmount() {
    return tipService.getTotalAmount();
  }

  print(): void {
    const receipt: HTMLElement | null = document.getElementById("receipt");

    if (receipt) {
      const printWindow: Window | null = window.open('', '', 'width=800,height=600');

      if (printWindow) {
        // Grab all <style> and <link> elements from the current document
        const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
          .map(node => node.outerHTML)
          .join('');

        const printContent = `
        <html lang="en">
          <head>
            <title>Receipt</title>
            ${styles}
            <style>
              body {
                margin: 40px;
                font-family: Arial, sans-serif;
              }
              .receipt-container {
                max-width: 600px;
                margin: auto;
              }
            </style>
          </head>
          <body>
            ${receipt.innerHTML}
          </body>
        </html>
      `;

        printWindow.document.open();
        printWindow.document.write(printContent);
        printWindow.document.close();

        // Wait for content to load before printing
        printWindow.onload = () => {
          printWindow?.print();
          printWindow?.close();
        };
      } else {
        console.error("Could not open print window.");
      }
    } else {
      console.error("Receipt element not found.");
    }
  }
}
