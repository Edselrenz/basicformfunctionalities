import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.page').then((m) => m.SettingsPage),
  },
  {
    path: 'system',
    loadComponent: () =>
      import('./system/system.page').then((m) => m.SystemPage),
  },
  {
    path: 'storage',
    loadComponent: () =>
      import('./storage/storage.page').then((m) => m.StoragePage),
  },
  {
    path: 'vault',
    redirectTo: '/storage',
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    redirectTo: '/tabs/tab4',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
];
