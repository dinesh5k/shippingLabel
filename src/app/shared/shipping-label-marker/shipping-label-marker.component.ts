import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-label-marker',
  templateUrl: './shipping-label-marker.component.html',
  styleUrls: ['./shipping-label-marker.component.scss']
})
export class ShippingLabelMarkerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  complete = (event) => {
    console.log(event)
  }
}
