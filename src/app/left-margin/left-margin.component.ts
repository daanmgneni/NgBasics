import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-left-margin',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './left-margin.component.html',
  styleUrl: './left-margin.component.css'
})
export class LeftMarginComponent {
  marginTitle: string = 'Navigation'; // You can customize this
  navigationLinks: { path: string; label: string }[] = [
    { path: '/strengths', label: 'Strengths' },
    { path: '/weaknesses', label: 'Weaknesses' },
    { path: '/home', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];
}