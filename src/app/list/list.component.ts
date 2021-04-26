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
    this.httpService.getRequest('https://crudcrud.com/api/984288ef31d04a7f822f4d94f05bf11a/products')
      .subscribe((response) => {
        this.products = response;
      });
  }

}
