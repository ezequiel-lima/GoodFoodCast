import { CadastroempregadoComponent } from './cadastroempregado/cadastroempregado.component';
import { CadastroclienteComponent } from './cadastrocliente/cadastrocliente.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pedidos/pedido/pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Tela de login

  { path: 'login', component: LoginComponent }, // Tela de login

  { path: 'pedidos', component: PedidosComponent },

  { path: 'cliente', component: CadastroclienteComponent },

  { path: 'empregado', component: CadastroempregadoComponent },

  {
    path: 'pedido',
    children:
    [
      { path: '', component: PedidoComponent }, // - /pedido
      { path: 'edit/:id', component: PedidoComponent }, // - /pedido/edit/1
    ],
  },

  {
    path: '**', component: NotFoundComponent
  } // Pagina nao encontrada - 404

  //{ path: '', redirectTo: 'pedido', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
