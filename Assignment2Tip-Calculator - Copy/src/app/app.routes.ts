import { Routes } from '@angular/router';
import { Processing } from "./processing/processing"
import { InputPage } from './input/input';
import { Output } from "./output/output";

export const routes: Routes = [
  {
    path: '', redirectTo: 'input', pathMatch: 'full'
  },
  {
    path: 'input', component: InputPage
  },
  {
    path:'processing', component: Processing
  },
  {
    path: 'output', component: Output
  },
  {
    path:'**', redirectTo:'input'
  }
];
