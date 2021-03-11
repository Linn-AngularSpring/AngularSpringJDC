import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styles: [
  ]
})
export class AttributesComponent {

  currentValue: string = "0" 

  // Multi classes
  multiClass = "bg-info"

  // SIngle class
  singleClass = true

  textSize = 12

  changeTextSize(size:any) {
    this.textSize = size
  }

}
