import {Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
import {Product} from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
