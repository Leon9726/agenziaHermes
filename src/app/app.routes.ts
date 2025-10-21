import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/share/not-found/not-found.component';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule) },
  {
    path: '404',
    component: NotFoundComponent,
    data: { title: 'PAGINANONTROVATA.TITOLO', context: 'private' }
  },
  { path: '**', redirectTo: '/404' },

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

