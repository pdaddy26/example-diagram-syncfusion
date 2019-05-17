import { Component, OnInit, Input } from '@angular/core';
import { Workflow, FlowNode, FlowDecision, FlowStep, ConsoleActivity } from 'datex-flow';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss']
})
export class PropComponent implements OnInit {

  constructor() { }

  @Input()
  workflow: Workflow;

  @Input()
  node: FlowNode;

  ngOnInit() {
  }

  isDecision() {
    return this.node !== undefined && this.node instanceof FlowDecision;
  }

  isConsoleStep() {
    return this.node !== undefined && this.node instanceof FlowStep && this.node.action instanceof ConsoleActivity;
  }

  get consoleStep(): ConsoleActivity {
    if (this.isConsoleStep()) {
      return (this.node as FlowStep).action as ConsoleActivity;
    }
  }

  get decisionStep(): FlowDecision {
    if (this.isDecision()) {
      return this.node as FlowDecision;
    }
  }
}
