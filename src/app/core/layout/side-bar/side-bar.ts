import { Component, computed } from '@angular/core';
import { AuthService } from '../../../auth/auth-service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule, RouterModule, RouterLink, FormsModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss',
})
export class SideBar {
  menus = computed(() => this.auth.sidebarMenus());

  // menus: MenuItem[] = [
  //   { label: 'Admin Dashboard', route: '/admin', screen: 'ADMIN' },
  //   { label: 'User Dashboard', route: '/user', screen: 'USER' },
  //   { label: 'Location', route: '/location', screen: 'LOCATION' },
  //   { label: 'Report', route: '/report', screen: 'REPORT' }
  // ];
  constructor(public auth: AuthService) { }
}
