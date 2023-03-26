import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/componentes/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'cadastro-prestador',
    loadChildren: () => import('./pages/componentes/cadastro-prestador/cadastro-prestador.module').then( m => m.CadastroPrestadorPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/componentes/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/componentes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tipo-user',
    loadChildren: () => import('./pages/componentes/tipo-user/tipo-user.module').then( m => m.TipoUserPageModule)
  },
  {
    path: 'perfil-prestador',
    loadChildren: () => import('./pages/componentes/perfil-prestador/perfil-prestador.module').then( m => m.PerfilPrestadorPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/componentes/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./pages/componentes/esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule)
  },
  {
    path: 'redefinir-senha',
    loadChildren: () => import('./pages/componentes/redefinir-senha/redefinir-senha.module').then( m => m.RedefinirSenhaPageModule)
  },
  {
    path: 'tela-inicial-prestador',
    loadChildren: () => import('./pages/componentes/tela-inicial-prestador/tela-inicial-prestador.module').then( m => m.TelaInicialPrestadorPageModule)
  },
  
  {
    path: 'os-view',
    loadChildren: () => import('./pages/componentes/os-view/os-view.module').then( m => m.OsViewPageModule)
  },
  {
    path: 'finalizar-os',
    loadChildren: () => import('./pages/componentes/finalizar-os/finalizar-os.module').then( m => m.FinalizarOsPageModule)
  },
  {
    path: 'agendamentos-prestador',
    loadChildren: () => import('./pages/componentes/agendamentos-prestador/agendamentos-prestador.module').then( m => m.AgendamentosPrestadorPageModule)
  },
  {
    path: 'gerenciar-perfil',
    loadChildren: () => import('./pages/componentes/gerenciar-perfil/gerenciar-perfil.module').then( m => m.GerenciarPerfilPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
