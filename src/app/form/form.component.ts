import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}
