import { Component } from "@angular/core";
import {
  PaletteModel,
  NodeModel,
  NodeConstraints,
} from "@syncfusion/ej2-angular-diagrams";
import { FlowStep, FlowDecision, ConsoleActivity } from "datex-flow";

@Component({
  selector: "app-palette",
  templateUrl: "./palette.component.html",
  styleUrls: ["./palette.component.scss"]
})
export class PaletteComponent {

  // tslint:disable-next-line:no-bitwise
  nodeConstraints =  NodeConstraints.Default & ~NodeConstraints.Resize & ~NodeConstraints.Rotate;

  public palettes: PaletteModel[] = [
    {
      id: "activities",
      expanded: true,
      symbols: [
        {
          id: "Condition",
          addInfo: {
            nodeType: "FlowDecision"
          },
          shape: { type: "HTML", content: `<app-condition></app-condition>` },
          constraints: this.nodeConstraints
        },
        {
          id: "Console",
          addInfo: {
            nodeType: "FlowStep",
            action: "ConsoleActivity"
          },
          shape: { type: "HTML", content: "<app-console></app-console>" },
          constraints: this.nodeConstraints
        },
        {
          id: "Flow",
          addInfo: {
            nodeType: "FlowStep",
            action: "FlowChart"
          },
          shape: { type: "HTML", content: "<app-flow></app-flow>" },
          constraints: this.nodeConstraints
        }
      ],
      title: "Activities"
    },
    {
      id: "connectors",
      expanded: true,
      symbols: [
        {
          id: "connector",
          type: "Orthogonal",
          targetDecorator: {
            shape: "Arrow"
          },
          sourcePoint: {
            x: 0,
            y: 0
          },
          targetPoint: {
            x: 20,
            y: 20
          }
        }
      ],
      title: "Connectors"
    }
  ];

  public getSymbolDefaults(symbol: NodeModel): void {
    symbol.width = 165;
    symbol.height = 44;
  }

  public getSymbolInfo(symbol) {
    // Enables to fit the content into the specified palette item size
    return {
      fit: true
    };
    // When it is set as false, the element is rendered with actual node size
  }
}
