import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {} as Product;
  constructor() {
  }

  ngOnInit(): void {
  }

}
