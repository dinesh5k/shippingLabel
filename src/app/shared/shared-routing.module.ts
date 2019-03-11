import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WizardComponent } from './wizard/wizard.component';
import { ReceiverAddressComponent } from './features/shipping-label-marker/receiver-address/receiver-address.component';
import { SenderAddressComponent } from './features/shipping-label-marker/sender-address/sender-address.component';
import { ConfirmComponent } from './features/shipping-label-marker/confirm/confirm.component';
import { WeightComponent } from './features/shipping-label-marker/weight/weight.component';
import { ShippingoptionComponent } from './features/shipping-label-marker/shippingoption/shippingoption.component';
import { ShippingLabelMarkerComponent } from './shipping-label-marker/shipping-label-marker.component';

const routes: Routes = [
  {
    path: "",
    component: ShippingLabelMarkerComponent,
    children: [
      { path: "", redirectTo:"sender" },
      { path: "sender", component: SenderAddressComponent },
      { path: "receiver", component: ReceiverAddressComponent },
      { path: "confirm", component: ConfirmComponent },
      { path: "weight", component: WeightComponent },
      { path: "ship", component: ShippingoptionComponent },
    ]
  }
]
// const routes: Routes = [
//   { path: "", redirectTo: 'sender' },
//   {
//     path: 'receiver',
//     component: ReceiverAddressComponent
//   },
//   {
//     path: 'sender',
//     component: SenderAddressComponent
//   },
//   {
//     path: 'confirm',
//     component: ConfirmComponent
//   },
//   {
//     path: 'weight',
//     component: WeightComponent
//   },
//   {
//     path: 'ship',
//     component: ShippingoptionComponent
//   },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
