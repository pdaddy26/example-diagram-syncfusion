import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from "@angular/core";
import {
  DiagramComponent,
  NodeModel,
  IDropEventArgs,
  IClickEventArgs,
  ISelectionChangeEventArgs,
  Node,
  NodeConstraints,
  ConnectorModel,
  IDoubleClickEventArgs,
  AnnotationConstraints
} from "@syncfusion/ej2-angular-diagrams";
import {
  FlowStep,
  FlowDecision,
  ActivityFactory,
  FlowNode,
  FlowChart,
  ConsoleActivity
} from "datex-flow";

@Component({
  selector: "app-diagram",
  templateUrl: "./diagr.component.html",
  styleUrls: ["./diagr.component.scss"]
})
export class DiagrComponent implements OnInit {

  _nodeConstraints =
    // tslint:disable-next-line:no-bitwise
    NodeConstraints.Default & ~NodeConstraints.Resize & ~NodeConstraints.Rotate;

  _flow: FlowChart;
  _diagramCreated = false;
  _flowNodes: { [key: string]: FlowNode } = {};

  @Input()
  set flow(val: FlowChart) {
    this._flow = val;
    if (this._diagramCreated) {
      this.initDiagram();
    }
  }
  get flow() {
    return this._flow;
  }
  @Output()
  flowChange = new EventEmitter<FlowChart>();

  @ViewChild("diagram")
  public diagram: DiagramComponent;

  selectedNode: FlowNode;

  public layout: Object = {
    type: "HierarchicalTree"
  };

  public nodeDefaults(node: NodeModel): NodeModel {
    const obj: NodeModel = {};
    obj.width = 40;
    obj.height = 40;
    return obj;
  }

  ngOnInit() {}

  initDiagram() {
    this.diagram.clear();

    const startNode: NodeModel = {
      id: "start",
      shape: { type: "UmlActivity", shape: "InitialNode" },
      constraints: this._nodeConstraints,
      annotations: [{
        content: '',
        constraints: AnnotationConstraints.ReadOnly
      }]
    };
    // console.log(this.flow);
    this.diagram.add(startNode);

    this.flow.nodes.forEach(n => {
      const nodeModel = this.createNodeModel(n);
      const addedNode = this.diagram.add(nodeModel);
      this._flowNodes[addedNode.id] = n;
    });

    this.flow.nodes.forEach(n => {
      if (n instanceof FlowStep && n.next !== undefined) {
        this.diagram.add(this.createConnectorModel(n.id, n.next));
      } else if (n instanceof FlowDecision) {
        if (n.true !== undefined) {
          this.diagram.add(this.createConnectorModel(n.id, n.true, 'true'));
        }

        if (n.false !== undefined) {
          this.diagram.add(this.createConnectorModel(n.id, n.false, 'false'));
        }
      }
    });

    if (this.flow.start !== undefined) {
      this.diagram.add(this.createConnectorModel(startNode.id, this.flow.start.id));
    }

    this.diagram.refresh(); // this will center it
    this._diagramCreated = true;
  }

  createNodeModel(flowNode: FlowNode): NodeModel {
    const nodeModel: NodeModel = {
      id: flowNode.id,
      shape: { type: "HTML", content: this.getNodeContent(flowNode) },
      width: 165,
      height: 44,
      constraints: this._nodeConstraints,
      // Necessary or else the double click on the flow will
      // create bugs
      annotations: [{
        content: '',
        constraints: AnnotationConstraints.ReadOnly
      }]
    };
    return nodeModel;
  }

  createConnectorModel(srcId: string, destId: string, annotation?: string): ConnectorModel {
    return {
      sourceID: srcId,
      targetID: destId,
      annotations: [{
        content: annotation === undefined ? '' : annotation
      }],
      type: 'Orthogonal'
    };
  }

  getNodeContent(flowNode: FlowNode): string {
    if (flowNode instanceof FlowStep) {
      if (flowNode.action instanceof ConsoleActivity) {
        return "<app-console></app-console>";
      } else if (flowNode.action instanceof FlowChart) {
        return "<app-flow></app-flow>";
      }
    } else if (flowNode instanceof FlowDecision) {
      return "<app-condition></app-condition>";
    } else {
      return "<div>Unknown</div>";
    }
  }

  public created(args: Object): void {
    this.initDiagram();
  }

  public onDrop(args: IDropEventArgs): void {
    // console.log(args, this.diagram.nodes, this.diagram.connectors);
    const node = args.element as NodeModel;
    if (node.addInfo !== undefined) {
      let flownode: FlowStep | FlowDecision;
      if ((node.addInfo as any).nodeType === "FlowDecision") {
        flownode = new FlowDecision();
      } else {
        flownode = new FlowStep();
        flownode.action = ActivityFactory.Instance.create(
          (node.addInfo as any).action
        );
      }
      this._flowNodes[node.id] = flownode;
      this.selectedNode = flownode;
    }

    // console.log(this.flowNodes);
  }

  public click(args: IClickEventArgs): void {
    if (args instanceof MouseEvent) {
    } else {
      // console.log("lala", args);
      if (args.element instanceof DiagramComponent) {
        // console.log('diagram click');
      } else if (args.actualObject instanceof Node) {
        // console.log('node click');
        this.selectedNode = this._flowNodes[args.actualObject.id];
      }
    }
  }

  public doubleClick(args: IDoubleClickEventArgs): void {
    // console.log("double click", args);
    if (args.source instanceof Node) {
      // console.log('node click');
      const node = this._flowNodes[args.source.id];
      if (node instanceof FlowStep && node.action instanceof FlowChart) {
        this.flow = node.action;
        this.flowChange.emit(this.flow);
      }
    }
  }
}
