import { Component, OnInit, EventEmitter, Output } from '@angular/core';

enum ShippingOption {
  Ground = 1,
  Priority = 2
}
@Component({
  selector: 'app-shippingoption',
  templateUrl: './shippingoption.component.html',
  styleUrls: ['./shippingoption.component.scss']
})
export class ShippingoptionComponent implements OnInit {

  shippingOption = ShippingOption;
  shippingMethod: string;
  keys: string[];
  @Output() shipEmit = new EventEmitter<any>();

  constructor() {
    this.keys = Object.keys(this.shippingOption).filter(f => isNaN(Number(f)));
  }

  ngOnInit() {
  }

  emit = () => {
    this.shipEmit.emit(this.shippingOption[this.shippingMethod]);
  }

}
