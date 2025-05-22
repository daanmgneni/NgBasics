import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  personalTitle: string = 'A Glimpse into the World of Dhanesh'; // A more descriptive title
  tagline: string = 'Passionate Explorer of Code and Ideas'; // An optional tagline
}