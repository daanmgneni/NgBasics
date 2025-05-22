import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-left-margin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-margin.component.html',
  styleUrl: './left-margin.component.css'
})
export class LeftMarginComponent {
  marginTitle: string = 'Navigation'; // You can customize this
  navigationLinks: string[] = ['Home', 'About', 'Projects', 'Contact'];
}