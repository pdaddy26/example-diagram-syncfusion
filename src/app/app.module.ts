import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PaletteComponent } from "./palette/palette.component";

import {
  DiagramAllModule,
  SymbolPaletteAllModule,
  DataBindingService
} from "@syncfusion/ej2-angular-diagrams";
import { AccordionModule } from "@syncfusion/ej2-angular-navigations";
import { GridModule } from "@syncfusion/ej2-angular-grids";
import { DropDownListModule } from "@syncfusion/ej2-angular-dropdowns";

import { createCustomElement } from "@angular/elements";
import { FormsModule } from "@angular/forms";
import { DiagrComponent } from "./diagram/diagr.component";
import { ConditionComponent } from "./palette/symbols/condition/condition.component";
import { SymbolComponent } from "./palette/symbols/symbol/symbol.component";
import { ConsoleComponent } from "./palette/symbols/console/console.component";
import { PropComponent } from "./prop/prop.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { ArgumentComponent } from "./argument/argument.component";
import { ConsolePropComponent } from "./prop/console-prop/console-prop.component";
import { ConditionPropComponent } from "./prop/condition-prop/condition-prop.component";
import { DesignerComponent } from "./designer/designer.component";
import { VariableComponent } from "./variable/variable.component";
import { FlowComponent } from "./palette/symbols/flow/flow.component";

@NgModule({
  declarations: [
    AppComponent,
    PaletteComponent,
    DiagrComponent,
    ConditionComponent,
    SymbolComponent,
    ConsoleComponent,
    PropComponent,
    BreadcrumbComponent,
    ArgumentComponent,
    ConsolePropComponent,
    ConditionPropComponent,
    DesignerComponent,
    VariableComponent,
    FlowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramAllModule,
    SymbolPaletteAllModule,
    BrowserModule,
    FormsModule,
    AccordionModule,
    GridModule,
    DropDownListModule
  ],
  providers: [DataBindingService],
  entryComponents: [ConditionComponent, ConsoleComponent, FlowComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    let custom = createCustomElement(ConditionComponent, {
      injector: this.injector
    });
    customElements.define("app-condition", custom);

    custom = createCustomElement(ConsoleComponent, {
      injector: this.injector
    });
    customElements.define("app-console", custom);

    custom = createCustomElement(FlowComponent, {
      injector: this.injector
    });
    customElements.define("app-flow", custom);
  }

  ngDoBootstrap() {}
}
