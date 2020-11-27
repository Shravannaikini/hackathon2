import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AmountComponent } from './amount/amount.component';
import { CareersComponent } from './careers/careers.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { Link1Component } from './dropdown/link1/link1.component';
import { Link2Component } from './dropdown/link2/link2.component';
import { Link3Component } from './dropdown/link3/link3.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  {path:'', component: HomeMainComponent},
  {path:'home', component: HomeMainComponent},
  {path:'userInfo' , component:UserInfoComponent},
  {path:'careers', component:CareersComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'amount', component:AmountComponent},
  {path:'register', component: RegisterComponent},
  {path: 'cart', component: CartComponent},
  {path: 'contact', component: ContactComponent},
  {path:'dropdown', component:DropdownComponent,
  children: [
    {path: '', redirectTo: 'dropdown', pathMatch: 'full'},
    {path:'link1', component:Link1Component},
    {path:'link2', component:Link2Component},
    {path:'link3', component:Link3Component},
  ]

},
  {path:'**', component:ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
