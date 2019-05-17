import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SymbolComponent {

  @Input()
  icon: string;

  @Input()
  title: string;

  @Input()
  description: string;

}
