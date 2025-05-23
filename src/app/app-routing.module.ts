import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrengthsComponent } from './strengths/strengths.component';
import { WeaknessComponent } from './weakness/weakness.component';

const routes: Routes = [
  { path: 'strengths', component: StrengthsComponent },
  { path: 'weaknesses', component: WeaknessComponent },
  { path: '', redirectTo: '/strengths', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }