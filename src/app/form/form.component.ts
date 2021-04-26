import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  productForm = this.fb.group({
    name: [''],
    description: [''],
    price: [''],
    image: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
