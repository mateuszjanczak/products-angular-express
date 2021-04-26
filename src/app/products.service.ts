import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {Product} from './product';
import {ProductRequest} from './productRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = 'http://localhost:4000/api/products/';

  constructor(private httpService: HttpService) { }

  loadProduct(id: string): Observable<Product> {
    return this.httpService.getRequest(this.url + id);
  }

  removeProduct(id: string): void {
    this.httpService.deleteRequest(this.url + id)
      .subscribe();
  }

  loadProducts(): Observable<Product[]> {
    return this.httpService.getRequest(this.url);
  }

  saveProduct(productRequest: ProductRequest): void {
    this.httpService.postRequest(this.url, productRequest).subscribe();
  }
}
