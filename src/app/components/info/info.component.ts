import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
    isClicked = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

    clicked() {
        this.isClicked = true;
    }
}
