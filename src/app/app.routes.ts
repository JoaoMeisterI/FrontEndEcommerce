import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroProdutoComponent } from './pages/produtoPages/cadastro/cadastro-produto.component';
import { CadastroUsuarioComponent } from './pages/usuarioPages/cadastro/cadastro-usuario.component';
import { EditarProdutoComponent } from './pages/produtoPages/editar/editar-produto.component';
import { EditarUsuarioComponent } from './pages/usuarioPages/editar/editar-usuario.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { FavoritosComponent } from './componentes/favoritos/favoritos.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'cadastro/produto',component:CadastroProdutoComponent},
    {path:'editar/produto/:id',component:EditarProdutoComponent},
    {path:'cadastro/usuario',component:CadastroUsuarioComponent},
    {path:'editar/usuario/:id',component:EditarUsuarioComponent},
    {path:'usuario/carrinho',component:CarrinhoComponent},
    {path:'usuario/favoritos',component:FavoritosComponent},
];
