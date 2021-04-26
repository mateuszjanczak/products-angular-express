import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {} as Product;
  @Output() removeEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit(): void {
  }

  sendRemoveEvent(): void {
    this.removeEvent.emit(this.product._id);
  }
}
