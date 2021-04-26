import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {Product} from '../product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  productId: string;
  product: Product = {} as Product;

  constructor(private httpService: HttpService, private activatedRoute: ActivatedRoute) {
    this.productId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.loadProduct(this.productId);
  }

  loadProduct(id: string): void {
    this.httpService.getRequest('https://crudcrud.com/api/b1ac35afed314dd689235fbba503cd26/products/' + id)
      .subscribe((response) => {
        this.product = response;
      });
  }
}
