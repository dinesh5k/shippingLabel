import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingLabelMarkerComponent } from './shipping-label-marker.component';

describe('ShippingLabelMarkerComponent', () => {
  let component: ShippingLabelMarkerComponent;
  let fixture: ComponentFixture<ShippingLabelMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingLabelMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingLabelMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
