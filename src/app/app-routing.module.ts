import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';

import { CartComponent } from './user/cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { UpdatepricesComponent } from './admin/updateprices/updateprices.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent,
    children:[
      { path: 'register',component:RegisterComponent} 
    ] 
  },
  { path: 'user', component: UserComponent,
    children:[
      {path: 'home', component:HomeComponent},
      {path: 'cart',component:CartComponent},
      { path: 'about', component: AboutComponent },
      { path: 'search', component: SearchComponent },
      { path: '', redirectTo:'user/home', pathMatch: 'prefix'}
    ]
  },
  { path: 'admin', component:AdminComponent,
    children:[
      {path: 'home', component:HomeComponent},
      {path: 'editproduct',component:EditproductComponent},
      {path: 'updateprices',component:UpdatepricesComponent},
      {path: 'addproduct',component:AddproductComponent},
      { path: '', redirectTo:'admin/home', pathMatch: 'prefix'}
    ]
  },

  { path: 'cart', component:CartComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
