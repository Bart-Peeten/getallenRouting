import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-getallen',
  templateUrl: './getallen.component.html',
  styleUrls: ['./getallen.component.css']
})
export class GetallenComponent implements OnInit {

  @Input() getal: number;

  constructor() { }

  ngOnInit() {
  }

}
