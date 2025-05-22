import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strengths',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strengths.component.html',
  styleUrl: './strengths.component.css'
})
export class StrengthsComponent {
  myStrengths: string[] = [
    'Problem-solving',
    'Communication',
    'Teamwork',
    'Adaptability',
    'Continuous Learning'
  ];
}