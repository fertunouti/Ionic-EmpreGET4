import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaInicialPrestadorPageRoutingModule } from './tela-inicial-prestador-routing.module';

import { TelaInicialPrestadorPage } from './tela-inicial-prestador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaInicialPrestadorPageRoutingModule
  ],
  declarations: [TelaInicialPrestadorPage]
})
export class TelaInicialPrestadorPageModule {}
