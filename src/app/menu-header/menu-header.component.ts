import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onHomeClick() {
    this.router.navigate(['']);
  }

  onPackagesClick() {
    this.router.navigate(['/about-us']);
  }

  onGalleryClick() {
    this.router.navigate(['/blog']);
  }

  onContactUsClick() {
    this.router.navigate(['/contact-us']);
  }

  onBookingClick() {
    this.router.navigate(['/booking']);
  }
}
