import { Component, Input, OnInit } from '@angular/core';
import { ConsoleActivity } from 'datex-flow';

@Component({
  selector: 'app-console-prop',
  templateUrl: './console-prop.component.html',
  styleUrls: ['./console-prop.component.scss']
})
export class ConsolePropComponent implements OnInit {

  @Input()
  console: ConsoleActivity;

  constructor() { }

  ngOnInit() {
  }

}
