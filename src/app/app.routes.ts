import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'add-price-list',
    loadComponent: () => import('./add-price-list/add-price-list.page').then( m => m.AddPriceListPage)
  },
  {
    path: 'view-price-lists',
    loadComponent: () => import('./view-price-lists/view-price-lists.page').then( m => m.ViewPriceListsPage)
  },

];
