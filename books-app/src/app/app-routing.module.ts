import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookItemComponent } from './components/book-item/book-item.component';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'read/:bookId',
    component: BookItemComponent
  },
  {
    path : 'analytics', 
    loadChildren : () => import('./analytics/analytics.module').then(m => m.AnalyticsModule)
  },
  {
      path: '**', 
      component: BookListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
