import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  productForm!:FormGroup;
  seasons: string[] = ['Excelent', 'Good', 'Lowest' ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      productQuality: ['', Validators.required]

    })
  }
  addProduct(){
    console.log(this.productForm.value);
  }

}
