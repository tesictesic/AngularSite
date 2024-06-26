import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path:"contact",
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path:"author",
    loadChildren:()=>import('./author/author.module').then(m=>m.AuthorModule)
  },
  {
    path:"cart",
    loadChildren:()=>import('./cart/cart.module').then(m=>m.CartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
