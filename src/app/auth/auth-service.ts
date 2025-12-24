import { Injectable, signal } from '@angular/core';
import { User } from '../shared/models/user.model';
import users from './users.json';
import loginData from '../apiRole.json';
import { Router } from '@angular/router';
import { RoutePermission } from '../shared/models/route-permission.model';
import { SidebarMenu } from '../shared/models/sidebar-menu.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = signal<User | null>(null);
  redirectUrl: string | null = null;
  // routePermissions = signal<RoutePermission[]>([]);
  sidebarMenus = signal<SidebarMenu[]>([]);

  constructor(private router: Router) { }

  // setRoutePermissions(perms: RoutePermission[]) {
  //   this.routePermissions.set(perms);
  // }

  getRoutePermission(path: string): SidebarMenu | undefined {
    return this.sidebarMenus().find(p => p.route === path);
  }

  setSidebarMenus(menus: SidebarMenu[]) {
    this.sidebarMenus.set(menus);
  }

  login(username: string) {
    const user = users.find(u => u.username === username);
    this.user.set(user as User);

    // this.setRoutePermissions([
    //   { path: 'location', screen: 'LOCATION', actions: ['read'] },
    //   { path: 'report', screen: 'REPORT', actions: ['read'] }
    // ]);

    this.setSidebarMenus(loginData.menus);
  }

  logout() {
    this.user.set(null);
    this.redirectUrl = null;
    this.router.navigate(['/']);
  }

  isLoggedIn() {
    return !!this.user();
  }

  hasRole(role: string): boolean {
    return !!this.user()?.roles?.includes(role);
  }

  hasPermission(screen: string, action: string) {
    return this.user()?.permissions[screen]?.includes(action);
  }

  hasAnyRole(roles: string[]): boolean {
    return roles.some(r => this.user()?.roles.includes(r));
  }

  canShowMenu(menu: SidebarMenu): boolean {
    if (menu.roles) {
      return this.hasAnyRole(menu.roles);
    }

    if (menu.screen && menu.actions) {
      return menu.actions.every(a =>
        this.hasPermission(menu.screen!, a)
      );
    }

    return false;
  }
}
