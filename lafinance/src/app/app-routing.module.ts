import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dash',
    loadChildren: () => import('./_page/dash/dash.module').then(m => m.DashModule)
  },
  {
    path: 'acao',
    loadChildren: () => import('./_page/acao/acao.module').then(m => m.AcaoModule)
  },
  {
    path: 'venda',
    loadChildren: () => import('./_page/venda/venda.module').then(m => m.VendaModule)
  },
  {
    path: 'ativo',
    loadChildren: () => import('./_page/ativo/ativo.module').then(m => m.AtivoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
