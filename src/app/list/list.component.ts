import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {HttpService} from '../http.service';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title = 'products';
  products: Product[] = [];

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.loadProducts()
      .subscribe((response) => {
        this.products = response;
      });
  }

  handleRemoveEvent(id: string): void {
    this.productService.removeProduct(id);
    this.loadProducts();
  }
}
