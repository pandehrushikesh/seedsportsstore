import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [ProductRepository,
    Cart, Order, OrderRepository, AuthService,
    { provide: StaticDataSource, useClass: RestDataSource },
  RestDataSource]
})
export class ModelModuleModule { }
