import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { WeaknessComponent } from './weakness/weakness.component';
import { LeftMarginComponent } from './left-margin/left-margin.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  
    HeaderComponent,
    FooterComponent,
    StrengthsComponent,
    WeaknessComponent,
    LeftMarginComponent,
    CommonModule // Make sure CommonModule is also imported if needed
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'about-me-app'; // Or whatever your app name is
}