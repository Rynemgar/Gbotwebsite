import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService, Carpet } from '../../shared/api.service';
import { FormBuilder } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { SocketService } from '../../shared/socket.service';  

@Component({
  selector: 'app-carpet',
  templateUrl: './carpet.component.html',
  styleUrls: ['./carpet.component.scss']
})
export class CarpetComponent implements OnInit {
  checkoutForm;
  fullCarpetList: Carpet[] = [];
  carpet: Carpet[] = [];
  state: Carpet[] = [];
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

  sortField: keyof Carpet;
  sortDir: 'asc' | 'desc';
  

  constructor(private apiService: ApiService,
              private formBuilder: FormBuilder,
              private ref: ChangeDetectorRef,
              private socket: SocketService
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
        this.fullCarpetList = carpet;
        this.sortCarpets('ID');
        this.loadingIndicator = false;
      });
      this.socket.subscribe('carpet.update')
        .pipe(
          tap((update: any) => {
            const carpet = this.carpet.find(cpt => cpt.ID === update.ID);
            carpet.State = update.State;
          })
        )
        .subscribe();
      }
    
  

  sortCarpets(field: keyof Carpet): void {
    if (field === this.sortField) {
      this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDir = 'asc';
    }

    this.carpet = this.fullCarpetList.sort((a, b) => {
      if (field === 'ID') {
        return this.sortDir === 'asc' ? a[field] - b[field] : b[field] - a[field];
      } else {
        if (a[field] > b[field]) {
          return this.sortDir === 'asc' ? 1 : -1;
        }
        if (b[field] > a[field]) {
          return this.sortDir === 'asc' ? -1 : 1;
        }
        return 0;
      }
    });

    this.ref.detectChanges();
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
    row.State = 'Sold';

    console.warn('Your order has been submitted', customerData);
  }

  trackBy(idx, carpet) {
    return carpet.ID;
  }
}
