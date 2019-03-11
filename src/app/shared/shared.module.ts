import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { WizardComponent } from './wizard/wizard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { ReceiverAddressComponent } from './features/shipping-label-marker/receiver-address/receiver-address.component';
import { SenderAddressComponent } from './features/shipping-label-marker/sender-address/sender-address.component';
import { WeightComponent } from './features/shipping-label-marker/weight/weight.component';
import { ShippingoptionComponent } from './features/shipping-label-marker/shippingoption/shippingoption.component';
import { ConfirmComponent } from './features/shipping-label-marker/confirm/confirm.component';
import { ShippingLabelMarkerComponent } from './shipping-label-marker/shipping-label-marker.component';

@NgModule({
  declarations: [WizardComponent,
    ReceiverAddressComponent,
    SenderAddressComponent,
    ReceiverAddressComponent,
    WeightComponent,
    ShippingoptionComponent,
    ConfirmComponent,
    ShippingLabelMarkerComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    NgbModule
  ]
})
export class SharedModule { }
