import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Product} from '../product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {

  productId: string;
  product: Product = {} as Product;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.productId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productsService.loadProduct(this.productId)
      .subscribe((response) => {
        this.product = response;
      });
  }

  handleRemoveEvent(id: string): void {
    this.productsService.removeProduct(id);
    this.router.navigateByUrl('list').then(r => console.log(r));
  }
}
