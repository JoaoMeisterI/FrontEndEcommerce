import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastroProdutoComponent } from './pages/produtoPages/cadastro/cadastro-produto.component';
import { CadastroUsuarioComponent } from './pages/usuarioPages/cadastro/cadastro-usuario.component';
import { EditarProdutoComponent } from './pages/produtoPages/editar/editar-produto.component';
import { EditarUsuarioComponent } from './pages/usuarioPages/editar/editar-usuario.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { ProdutosCategoriaComponent } from './pages/produtos-categoria/produtos-categoria.component';
import { ProdutosPaginaProdutoComponent } from './pages/produtos-pagina-produto/produtos-pagina-produto.component';
import { LoginComponent } from './componentes/login/login.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'login/usuario',component:LoginComponent},
    {path:'cadastro/produto',component:CadastroProdutoComponent},
    {path:'editar/produto/:id',component:EditarProdutoComponent},
    {path:'cadastro/usuario',component:CadastroUsuarioComponent},
    {path:'editar/usuario/:id',component:EditarUsuarioComponent},
    {path:'usuario/carrinho',component:CarrinhoComponent},
    {path:'usuario/favoritos/:categoria',component:ProdutosCategoriaComponent},
    {path:'produto/categoria/:categoria',component:ProdutosCategoriaComponent},
    {path:'produto/detalhamento/:id',component:ProdutosPaginaProdutoComponent},
];
