import { Component, Input } from "@angular/core";
import { Workflow } from "datex-flow";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @Input()
  workflow: Workflow;
}
