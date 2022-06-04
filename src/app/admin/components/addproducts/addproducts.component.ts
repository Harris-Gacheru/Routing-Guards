import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Formstate } from '../../interface/formstate';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit, Formstate {
  Form = this.fb.group({
    name: ['', Validators.required],
    price: [0]
  })
  constructor(private fb: FormBuilder, private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  submit(){
    this.productsService.addProduct(this.Form.value)
  }

  isDataSaved(): boolean {
    return !this.Form.dirty
  }
}
