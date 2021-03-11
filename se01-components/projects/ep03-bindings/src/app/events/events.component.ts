import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styles: [
  ]
})
export class EventsComponent {

  from = ["JavaScript", "Spring", "Angular", "Typescript"]

  to: string[] = []

  private dragValue?:string

  drag(event: any) {
    this.dragValue = event.target?.innerText
  }

  drop(event: any) {
    if (event.target.id == "to" && this.dragValue) {
      this.to.push(this.dragValue)
      this.from = this.from.filter(a => a != this.dragValue)
      this.dragValue = undefined
    }
  }



}
