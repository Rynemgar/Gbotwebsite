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

  toggleModal(orderForm: HTMLElement, show = true) {
    orderForm.style.display = show ? 'block' : 'none';
  }

  onSubmit(customerData, row) {
    const data = {
      customerData, row
    };
    this.apiService.sendFormData(data)
      .subscribe();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }
}
