import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './components/padre/padre.component';
import { RickandmortyComponent } from './pages/rickandmorty/rickandmorty.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: PadreComponent
  },
  {
    path: 'padre',
    component: PadreComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'rickandmorty',
    component: RickandmortyComponent
  },
  {
    path:'**',
    redirectTo: '/inicio',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
