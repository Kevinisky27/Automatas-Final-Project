import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneracionProgramaComponent } from './partials/generacion-programa/generacion-programa.component';
import { IntegrantesComponent } from './partials/integrantes/integrantes.component';
import { RepositoryComponent } from './partials/repository/repository.component';

const routes: Routes = [
  { path: '', redirectTo: 'programa', pathMatch: 'full' },
  { path: 'repositorios', component: RepositoryComponent, title: 'Autómatas Repositorios'},
  { path: 'integrantes', component:  IntegrantesComponent, title: 'Autómatas Integrantes'},
  { path: 'programa', component: GeneracionProgramaComponent, title: 'Programa Autómatas' },

  { path: '**', redirectTo: 'programa', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
