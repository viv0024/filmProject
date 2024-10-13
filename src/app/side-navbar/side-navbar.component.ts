import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {
  navItems = [
    { label: 'Home', icon: 'home' },
    { label: 'Explore', icon: 'explore' },
    { label: 'Notifications', icon: 'notifications' },
    { label: 'Messages', icon: 'mail' },
    { label: 'Bookmarks', icon: 'bookmark' },
    { label: 'Profile', icon: 'person' },
    // Add more items as needed
  ];

}
