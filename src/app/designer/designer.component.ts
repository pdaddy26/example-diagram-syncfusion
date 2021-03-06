import { Component, OnInit, Input } from "@angular/core";
import {
  Workflow,
  FlowChart,
  FlowStep,
  ConsoleActivity,
  FlowDecision,
  Argument,
  ArgumentDirection,
  Variable
} from "datex-flow";

@Component({
  selector: "app-designer",
  templateUrl: "./designer.component.html",
  styleUrls: ["./designer.component.scss"]
})
export class DesignerComponent implements OnInit {
  workflow: Workflow;
  flow: FlowChart;

  constructor() {}

  ngOnInit() {
    const flowChart = new FlowChart();
    flowChart.id = `A${flowChart.id.substr(0, 7)}`;

    const var1 = new Variable();
    var1.name = "variable 1";
    flowChart.addVariable(var1);

    const var2 = new Variable();
    var2.name = "variable 2";
    flowChart.addVariable(var2);

    const step1 = new FlowStep();
    // the ID are being use as ID on html tag in the syncfusion
    // ID cannot start by a number according to html spec.
    step1.id = `A${step1.id.substr(0, 7)}`;
    step1.action = new ConsoleActivity();
    flowChart.start = step1;

    const step2 = new FlowStep();
    step2.id = `A${step2.id.substr(0, 7)}`;
    step2.action = new ConsoleActivity();
    flowChart.addNode(step2);

    step1.next = step2.id;

    const embedFlowChart = new FlowChart();
    embedFlowChart.id = embedFlowChart.id.substr(0, 7);

    const var3 = new Variable();
    var3.name = "variable 3";
    embedFlowChart.addVariable(var3);

    const step3 = new FlowStep();
    step3.id = `A${step3.id.substr(0, 7)}`;
    step3.action = embedFlowChart;
    flowChart.addNode(step3);

    step2.next = step3.id;

    const step4 = new FlowDecision();
    step4.id = `A${step4.id.substr(0, 7)}`;
    embedFlowChart.start = step4;
    const step4True = new FlowStep();
    step4True.action = new ConsoleActivity();
    step4True.id = `A${step4True.id.substr(0, 7)}`;
    embedFlowChart.addNode(step4True);
    const step4False = new FlowStep();
    step4False.action = new ConsoleActivity();
    step4False.id = `A${step4False.id.substr(0, 7)}`;
    embedFlowChart.addNode(step4False);
    step4.true = step4True.id;
    step4.false = step4False.id;

    const conditionStep = new FlowDecision();
    conditionStep.id = `A${conditionStep.id.substr(0, 7)}`;
    conditionStep.left = 1;
    conditionStep.right = 2;
    flowChart.addNode(conditionStep);
    step3.next = conditionStep.id;

    const step6 = new FlowStep();
    step6.id = `A${step6.id.substr(0, 7)}`;
    step6.action = new ConsoleActivity();
    flowChart.addNode(step6);

    const step7 = new FlowStep();
    step7.id = `A${step7.id.substr(0, 7)}`;
    step7.action = new ConsoleActivity();
    flowChart.addNode(step7);

    conditionStep.true = step6.id;
    conditionStep.false = step7.id;

    const wf = new Workflow();
    wf.id = `A${wf.id.substr(0, 7)}`;
    wf.flow = flowChart;

    const wfArgIn = new Argument();
    wfArgIn.direction = ArgumentDirection.In;
    wfArgIn.name = "In Arg";
    wf.addArgument(wfArgIn);

    const wfArgOut = new Argument();
    wfArgOut.direction = ArgumentDirection.Out;
    wfArgOut.name = "Out Arg";
    wf.addArgument(wfArgOut);

    this.workflow = wf;
    this.flow = this.workflow.flow;
    // this.flow = embedFlowChart;
  }
}
