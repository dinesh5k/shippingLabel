import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender-address',
  templateUrl: './sender-address.component.html',
  styleUrls: ['./sender-address.component.scss']
})
export class SenderAddressComponent implements OnInit {
  from = {
    "name": "",
    "street": "",
    "city": "",
    "state": "",
    "zip": ""
  }

  @Output() sender = new EventEmitter<any>();
  
  constructor(private router: Router) { }

  ngOnInit() {
  }


  emit = () => {
    this.sender.emit(this.from)
  }
}
