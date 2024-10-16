import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.css'
})
export class SideNavbarComponent {

  constructor(private route: Router) { }

  navItems = [
    { label: 'Home', icon: 'home', route: 'home' },
    { label: 'LogIn', icon: 'login', route: 'login' },
    { label: 'Notifications', icon: 'notifications' },
    { label: 'Messages', icon: 'mail' },
    { label: 'Bookmarks', icon: 'bookmark' },
    { label: 'Profile', icon: 'person' },
  ];

  onNavigate(item: any) {
    // console.log(item.route);
    if (item.route) {
      console.log(item.route);
      console.log(item.route);
      this.route.navigate([`/${item.route}`]);
    }


  }

}
