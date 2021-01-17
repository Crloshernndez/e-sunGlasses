import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { HomeRoutingModule } from './home-routing.module';
import { ShareModule } from '../share/share.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [HomeComponent, ProductComponent],
  imports: [CommonModule, HomeRoutingModule, ShareModule, MaterialModule],
})
export class HomeModule {}
