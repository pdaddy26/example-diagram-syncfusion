import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injector } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PaletteComponent } from "./palette/palette.component";

import { DialogAllModule } from "@syncfusion/ej2-angular-popups";
import {
  DiagramAllModule,
  SymbolPaletteAllModule,
  OverviewAllModule,
  DataBindingService
} from "@syncfusion/ej2-angular-diagrams";
import { MultiSelectModule } from "@syncfusion/ej2-angular-dropdowns";
import { ToolbarModule, AccordionModule } from "@syncfusion/ej2-angular-navigations";
import {
  NumericTextBoxModule,
  ColorPickerModule,
  UploaderModule,
  TextBoxModule
} from "@syncfusion/ej2-angular-inputs";
import { DropDownButtonModule } from "@syncfusion/ej2-angular-splitbuttons";
import {
  ButtonModule,
  CheckBoxModule,
  RadioButtonModule
} from "@syncfusion/ej2-angular-buttons";

import { createCustomElement } from "@angular/elements";
import { FormsModule } from "@angular/forms";
import { DiagrComponent } from "./diagram/diagr.component";
import { ConditionComponent } from "./palette/symbols/condition/condition.component";
import { SymbolComponent } from "./palette/symbols/symbol/symbol.component";
import { ConsoleComponent } from "./palette/symbols/console/console.component";
import { PropComponent } from './prop/prop.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ArgumentComponent } from './argument/argument.component';
import { ConsolePropComponent } from './prop/console-prop/console-prop.component';
import { ConditionPropComponent } from './prop/condition-prop/condition-prop.component';
import { DesignerComponent } from './designer/designer.component';
import { VariableComponent } from './variable/variable.component';
import { FlowComponent } from './palette/symbols/flow/flow.component';

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
    OverviewAllModule,
    ButtonModule,
    ColorPickerModule,
    CheckBoxModule,
    ToolbarModule,
    DropDownButtonModule,
    UploaderModule,
    DialogAllModule,
    TextBoxModule,
    RadioButtonModule,
    MultiSelectModule,
    NumericTextBoxModule,
    BrowserModule,
    FormsModule,
    AccordionModule
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
