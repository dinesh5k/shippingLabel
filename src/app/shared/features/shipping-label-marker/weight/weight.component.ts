import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.scss']
})
export class WeightComponent implements OnInit {
  weight: number = 0;
  @Output() weightEmit =  new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  emit = () => {
    this.weightEmit.emit(this.weight);
    console.log(this.weight)
  }

}
