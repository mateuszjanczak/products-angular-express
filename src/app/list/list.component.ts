import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  title = 'products';
  products: Product[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.httpService.getRequest('https://crudcrud.com/api/b1ac35afed314dd689235fbba503cd26/products')
      .subscribe((response) => {
        this.products = response;
      });
  }

}
