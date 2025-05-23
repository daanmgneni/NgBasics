import { Routes } from '@angular/router';
import { StrengthsComponent } from './strengths/strengths.component';
import { WeaknessComponent } from './weakness/weakness.component';

export const routes: Routes = [
  { path: 'strengths', component: StrengthsComponent },
  { path: 'weaknesses', component: WeaknessComponent },
  { path: '', redirectTo: '/strengths', pathMatch: 'full' }, // Default route
];