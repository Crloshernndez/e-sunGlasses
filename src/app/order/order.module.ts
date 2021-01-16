import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './components/order.component';

import { ShareModule } from '../share/share.module';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, ShareModule, OrderRoutingModule],
})
export class OrderModule {}
