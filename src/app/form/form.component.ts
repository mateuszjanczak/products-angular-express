import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';
import {ProductRequest} from '../productRequest';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name = new FormControl('');
  description = new FormControl('');
  price = new FormControl('');
  image = new FormControl('');

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }

  saveForm(): void {
    const productRequest: ProductRequest = {
      name: this.name.value,
      description: this.description.value,
      price: this.price.value,
      image: this.image.value
    };

    this.productsService.saveProduct(productRequest);
    this.router.navigateByUrl('list').then(r => console.log(r));
  }
}
