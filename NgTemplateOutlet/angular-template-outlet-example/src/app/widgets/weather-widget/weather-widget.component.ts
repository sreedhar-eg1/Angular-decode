import {
  AfterViewInit,
  Component,
  inject,
  Injector,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { WidgetActions } from "../widget-actions.service";
import { WidgetState } from "../widget-state.service";
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: "weather-widget",
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    <div class="widget-header">
      <ng-container
        [ngTemplateOutlet]="headerTemplate || defaultWidgetHeader"
      ></ng-container>
      <ng-template #defaultWidgetHeader>
        <div class="widget-title">Weather Forecast</div>
        <div class="widget-sub-title">Current weather in your location</div>
      </ng-template>
    </div>
    <div class="widget-content">
      <ng-container
        [ngTemplateOutlet]="contentTemplate || defaultWidgetContent"
        [ngTemplateOutletContext]="{ state: state }"
      ></ng-container>
      <ng-template #defaultWidgetContent>
        <div class="sky-condition">
          {{ state.data.skyCondition === "sunny" ? "☀️" : "☁️" }}
        </div>
        <div class="temperature">{{ state.data.temperature }}°C</div>
      </ng-template>
    </div>
    <div class="widget-actions">
      <ng-container
        [ngTemplateOutlet]="actionTemplate || defaultActionContent"
        [ngTemplateOutletContext]="{ $implicits: actions }"
        [ngTemplateOutletInjector]="injector"
      ></ng-container>
      <ng-template #defaultActionContent>
        <button (click)="actions.reload()">Reload</button>
        <button (click)="actions.copyData()">Copy Info</button>
      </ng-template>
    </div>
  `,
  styleUrls: ["./weather-widget.component.css"],
  providers: [WidgetActions, WidgetState],
})
export class WeatherWidgetComponent implements AfterViewInit {
  @Input() headerTemplate!: TemplateRef<any>;
  @Input() contentTemplate!: TemplateRef<WidgetState>;
  @Input() actionTemplate!: TemplateRef<any>;

  state = inject(WidgetState);
  actions = inject(WidgetActions);
  injector = inject(Injector)

  // @ViewChild("container", { read: ViewContainerRef })
  // container!: ViewContainerRef;
  // @ViewChild("defaultWidgetHeader")
  // headerRef!: TemplateRef<any>;

  ngOnInit(): void {
    // console.log(this.container);
    // console.log(this.headerRef.elementRef.nativeElement)
  }

  ngAfterViewInit(): void {
    // console.log(this.container);
    // console.log(this.headerRef);
    // this.container.createEmbeddedView(this.headerRef)
  }
}
