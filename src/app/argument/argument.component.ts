import { Component, Input, OnInit } from '@angular/core';
import { Workflow, Argument, ArgumentDirection } from 'datex-flow';

@Component({
  selector: 'app-argument',
  templateUrl: './argument.component.html',
  styleUrls: ['./argument.component.scss']
})
export class ArgumentComponent implements OnInit {

  @Input()
  workflow: Workflow;
  argDir = ArgumentDirection;

  constructor() { }

  ngOnInit() {
  }

  get arguments(): Argument[] {
    return this.workflow.arguments;
  }


  get directions() {
    return Object.keys(this.argDir).map(key => this.argDir[key]);
  }

  remove(arg: Argument) {
    this.workflow.removeArgument(arg);
  }

}
