import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WizardData } from '../features/shipping-label-marker/wizard-data';
import { Router } from '@angular/router';
enum WizardAction {
  Prev = 1,
  Next = 2,
  End = 3
};
const shippingRate = 0.40;

enum ShippingOption {
  Ground = 1,
  Priority = 2
}

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, WizardData {

  progress = 0;
  shippingCost: number
  shippingOption = ShippingOption;
  @Output() contextEmit =  new EventEmitter<any>();
  wizardAction = WizardAction;
  context = {
    from: {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: ""
    },
    to: {
      name: " ",
      street: "",
      city: "",
      state: "",
      zip: ""
    },
    weight: 0,
    shippingOption: 1
  }
  navigate: number = 1;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAction = (action: string) => {
    if (action == "2") {
      this.navigate = this.navigate + 1;
      this.progress = this.progress + 20;
    }
    if (action == "1") {
      if (this.navigate > 1) {
      this.navigate = this.navigate - 1;
        this.progress = this.progress - 20;
      }
    }
    if (action == "3") {
      this.contextEmit.emit(this.context)
    }

  };


  updateContext = (event, element: string) => {
    if (element == "1") {
      this.context["from"] = event;

    }
    if (element == "2") {
      this.context["to"] = event;
    }
    if (element == "3") {
      this.context["weight"] = event
    }
    if (element == "4") {
      this.context["shippingOption"] = event
    }
    this.shippingCost = this.context.weight * shippingRate *
      (this.context.shippingOption === this.shippingOption.Ground ? 1 : 1.5);
    console.log(this.progress)
    console.log(event)
    console.log(this.context)
  }

}
