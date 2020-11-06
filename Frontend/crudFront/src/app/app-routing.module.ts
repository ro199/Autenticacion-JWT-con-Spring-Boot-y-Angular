import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { ListaProductoComponent } from './componentes/lista-producto/lista-producto.component';
import { NuevoProductoComponent } from './componentes/nuevo-producto/nuevo-producto.component';

const routes: Routes = [
  {
    path: '', 
    component: ListaProductoComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleProductoComponent
  },
  {
    path: 'nuevo',
    component: NuevoProductoComponent
  },
  {
    path: 'editar/:id',
    component: EditarProductoComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
