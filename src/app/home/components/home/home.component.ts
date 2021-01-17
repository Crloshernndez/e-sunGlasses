import { Component, OnInit } from '@angular/core';

import { Product } from '../../../Products.model';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products: Product[];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.products = this.productsService.getAllProducts();
  }
}
