import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/persona/listar/listar.component';
import { CrearComponent } from './pages/persona/crear/crear.component';

const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'crear', component:CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
