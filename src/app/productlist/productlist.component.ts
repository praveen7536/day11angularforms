import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productForm;
 
  products = [];

  constructor(private fb: FormBuilder ) {
     
    this.productForm = this.fb.group({
      'productname': this.fb.control('', [Validators.required]),
      'productprice': this.fb.control("", [Validators.required]),
       'stock': this.fb.control("", [Validators.required])
    })
  }
  submitForm() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.products.push(this.productForm.value.id);
      console.log(this.products);
      window.localStorage.setItem(this.productForm.value.id, JSON.stringify({ name: this.productForm.value.name, price: this.productForm.value.price, stock: this.productForm.value.stock }))
      
    }
  }
  ngOnInit(): void {
  }
}

