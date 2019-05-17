import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Workflow, FlowChart, FlowStep } from 'datex-flow';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  _flow: FlowChart;

  crumbs: FlowChart[] = [];

  @Input()
  workflow: Workflow;

  @Input()
  set flow(val: FlowChart) {
    this._flow = val;
    this.crumbs.length = 0;
    this.createCrumb(this.flow);
    console.log("breadcrumb", this.crumbs);
  }
  get flow() {
    return this._flow;
  }

  @Output()
  flowChange = new EventEmitter<FlowChart>();

  constructor() { }

  ngOnInit() {
  }

  onCrumbClick(flowChart: FlowChart) {
    this.flowChange.emit(flowChart);
  }

  createCrumb(flowChart: FlowChart) {
    this.crumbs.unshift(flowChart);

    // Reached top level flowchart
    if (flowChart.parent === undefined) {
      return;
    }

    this.createCrumb(flowChart.parent.parent);
  }
}
