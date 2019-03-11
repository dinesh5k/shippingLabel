import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receiver-address',
  templateUrl: './receiver-address.component.html',
  styleUrls: ['./receiver-address.component.scss']
})
export class ReceiverAddressComponent implements OnInit {
  to = {
    "name": "",
    "street": "",
    "city": "",
    "state": "",
    "zip": ""
  }

  @Output() receiver = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  emit = () => {
    this.receiver.emit(this.to);
  }
  
}
