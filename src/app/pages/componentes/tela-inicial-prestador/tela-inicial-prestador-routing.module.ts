import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaInicialPrestadorPage } from './tela-inicial-prestador.page';

const routes: Routes = [
  {
    path: '',
    component: TelaInicialPrestadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaInicialPrestadorPageRoutingModule {}
