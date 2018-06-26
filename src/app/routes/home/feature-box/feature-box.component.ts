import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.css']
})
export class FeatureBoxComponent implements OnInit {
  @Input() imageUrl: string;
  @Input() title: string;
  @Input() content: string;

  constructor() { }

  ngOnInit() {
  }

}
