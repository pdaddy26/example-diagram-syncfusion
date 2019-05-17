import { Component, OnInit, Input } from '@angular/core';
import { FlowChart, Variable } from 'datex-flow';

@Component({
  selector: 'app-variable',
  templateUrl: './variable.component.html',
  styleUrls: ['./variable.component.scss']
})
export class VariableComponent implements OnInit {

  @Input()
  flow: FlowChart;

  constructor() { }

  ngOnInit() {
  }

  get variables(): Variable[] {
    return this.flow.variables;
  }

  remove(variable: Variable) {
    this.flow.removeVariable(variable);
  }

}
