import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ConsoleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
