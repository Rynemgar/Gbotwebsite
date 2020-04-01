import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carpet',
  templateUrl: './carpet.component.html',
  styleUrls: ['./carpet.component.scss']
})
export class CarpetComponent implements OnInit {
  checkoutForm;
  carpet = [];
  rows = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: 'ID', summaryFunc: () => null },
    { prop: 'Range', summaryFunc: () => null },
    { prop: 'Colour', summaryFunc: () => null },
    { prop: 'Size', summaryFunc: () => null },
    { prop: 'Cost', summaryFunc: () => null },
    { prop: 'Value', summaryFunc: () => null }
  ];

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder
              ) {
                this.checkoutForm = this.formBuilder.group({
                  Rep: '',
                  Account: '',
                  Address: ''
                });
              }

  ngOnInit() {
    this.apiService.getCarpet()
      .subscribe((carpet: any[]) => {
        this.carpet = carpet;
        this.loadingIndicator = false;
      });
      
  }
  onSubmit(customerData) {
    this.apiService.sendFormData(customerData)
      .subscribe((carpet: any[]) => {
        this.carpet = carpet;
        this.loadingIndicator = false;
      });
    this.checkoutForm.reset();
 
    console.warn('Your order has been submitted', customerData);
  }
}
