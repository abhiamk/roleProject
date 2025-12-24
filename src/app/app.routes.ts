import { Routes } from '@angular/router';
import { permissionGuard } from './core/guards/permission.guard';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';
import { Unauthorized } from './shared/unauthorized/unauthorized';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.Login) },
  { path: 'unauthorized', component: Unauthorized },
  {
    path: '',
    loadComponent: () => import('./core/layout/main-component/main-component').then(m => m.MainComponent),
    children: [
      {
        path: 'admin',
        canActivate: [authGuard, roleGuard],
        data: { roles: ['ADMIN'] },
        loadComponent: () => import('./components/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard)
      },
      {
        path: 'user',
        canActivate: [authGuard, roleGuard],
        data: { roles: ['USER', 'ADMIN'] },
        loadComponent: () => import('./components/user-dashboard/user-dashboard').then(m => m.UserDashboard)
      },
      {
        path: 'location',
        canActivate: [authGuard, permissionGuard],
        data: { screen: 'LOCATION', action: 'read' },
        loadComponent: () => import('./components/location/location').then(m => m.Location)
      },
      {
        path: 'report',
        canActivate: [authGuard, permissionGuard],
        data: { screen: 'REPORT', action: 'read' },
        loadComponent: () => import('./components/report/report').then(m => m.Report)
      }
    ],
  },

  // {
  //   path: 'login', loadComponent: () => import('./auth/login/login').then(m => m.Login)
  // },
  // {
  //   path: 'location',
  //   canActivate: [authGuard, permissionGuard],
  //   data: { screen: 'location', action: 'read' },
  //   loadComponent: () => import('./components/location/location').then(m => m.Location)
  // },
  // {
  //   path: 'admin-permission',
  //   canActivate: [roleGuard],
  //   data: { roles: ['ADMIN'] },
  //   loadComponent: () => import('./admin/permission-admin/permission-admin').then(m => m.PermissionAdmin)
  // }import { Unauthorized } from './shared/unauthorized/unauthorized';

];
