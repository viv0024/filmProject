import { Component, HostListener } from '@angular/core';
import type { Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'filmProject';
  showScrollButton: boolean = false;

  scrollToTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  }

}

