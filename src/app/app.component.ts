import { CadastroPageModule } from './pages/componentes/cadastro/cadastro.module';
import { HomePageModule } from './pages/componentes/home/home.module';

import { Component, OnInit } from '@angular/core';
import { Platform, IonicModule } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Alterar perfil', url: '/cadastro', icon: 'person' },
    { title: 'Favoritos', url: '#', icon: 'heart' },
    { title: 'Pedidos', url: '#', icon: 'bag' },
    { title: 'Ajuda', url: '#', icon: 'help-circle' },
    { title: 'Sobre o app', url: '#', icon: 'warning' },
    { title: 'Sair', url: '#', icon: 'log-out' },
  ];

  constructor() {
  
  }
 
}