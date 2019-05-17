import { Component, Input, OnInit } from '@angular/core';
import { FlowDecision } from 'datex-flow';

@Component({
  selector: 'app-condition-prop',
  templateUrl: './condition-prop.component.html',
  styleUrls: ['./condition-prop.component.scss']
})
export class ConditionPropComponent implements OnInit {

  @Input()
  decision: FlowDecision;

  constructor() { }

  ngOnInit() {
  }

}
