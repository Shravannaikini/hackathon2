import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FoodListComponent } from './home/food-list/food-list.component';
import { LocationsComponent } from './home/locations/locations.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AmountComponent } from './amount/amount.component';
import { CareersComponent } from './careers/careers.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { Link1Component } from './dropdown/link1/link1.component';
import { Link2Component } from './dropdown/link2/link2.component';
import { Link3Component } from './dropdown/link3/link3.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoverEffectDirective } from './hover-effect.directive';
import { HooverEffectDirective } from './directives/hoover-effect.directive';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ContactComponent } from './contact/contact.component';
import { BlockCopyDirective } from './block-copy.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    FoodListComponent,
    LocationsComponent,
    HomeMainComponent,
    
    AboutUsComponent,
    AmountComponent,
    CareersComponent,
    ErrorPageComponent,
    DropdownComponent,
    Link1Component,
    Link2Component,
    Link3Component,
    HoverEffectDirective,
    HooverEffectDirective,
    RegisterComponent,
    CartComponent,
    ContactComponent,
    BlockCopyDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    Ng2SearchPipeModule

  
  
   
    
    
  
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
