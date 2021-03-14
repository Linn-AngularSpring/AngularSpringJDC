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

  private sourceId?: string

  drag(event: any) {
    this.dragValue = event.target?.innerText
    this.sourceId = event.target?.id
  }

  drop(event: any) {
    if (event.target.id == "to" && this.dragValue) {
      this.to.push(this.dragValue)
      this.from = this.from.filter(a => a != this.dragValue)
      this.dragValue = undefined
    }
  }

  dropMod(event: any) {
    if (this.dragValue && event.target.id != this.sourceId) {
      if (event.target.id == "to") {
        this.to.push(this.dragValue)
        this.from = this.from.filter(a => a != this.dragValue)
      } else if (event.target.id == "from") {
        this.from.push(this.dragValue)
        this.to = this.to.filter(a => a != this.dragValue)
      }
      this.dragValue = undefined
      this.sourceId = undefined
    }
  }

}
