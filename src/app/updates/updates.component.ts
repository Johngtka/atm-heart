import { Component } from '@angular/core'

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css'],
})
export class UpdatesComponent {
  name!: HTMLElement
  sec: string[]
  con: string[]
  constructor() {
    ;(this.sec = [
      'UPDATS.SECT.2',
      'UPDATS.SECT.3',
      'UPDATS.SECT.4',
      'UPDATS.SECT.5',
      'UPDATS.SECT.6',
      'UPDATS.SECT.7',
      'UPDATS.SECT.8',
      'UPDATS.SECT.9',
      'UPDATS.SECT.10',
      'UPDATS.SECT.11',
      'UPDATS.SECT.12',
    ]),
      (this.con = [
        'UPDATS.CONTENT.B2',
        'UPDATS.CONTENT.B3',
        'UPDATS.CONTENT.B4',
        'UPDATS.CONTENT.B5',
        'UPDATS.CONTENT.B6',
        'UPDATS.CONTENT.B7',
        'UPDATS.CONTENT.B8',
        'UPDATS.CONTENT.B9',
        'UPDATS.CONTENT.B10',
        'UPDATS.CONTENT.B11',
        'UPDATS.CONTENT.B12',
      ])
  }
}
