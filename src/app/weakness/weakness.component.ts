import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weakness',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weakness.component.html',
  styleUrl: './weakness.component.css'
})
export class WeaknessComponent {
  myWeaknesses: string[] = [
    'Time management (occasionally)',
    'Delegation (still improving)',
    'Public speaking (working on it)'
  ];
}