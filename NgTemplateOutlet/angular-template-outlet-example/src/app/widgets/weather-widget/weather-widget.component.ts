import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { WidgetActions } from "../widget-actions.service";
import { WidgetState } from "../widget-state.service";

@Component({
  selector: "weather-widget",
  standalone: true,
  template: `
    <div class="widget-header">
      <ng-container #container></ng-container>
      <ng-template #defaultWidgetHeader>
        <div class="widget-title">Weather Forecast</div>
        <div class="widget-sub-title">Current weather in your location</div>
      </ng-template>
    </div>
    <div class="widget-content">
      <div class="sky-condition">
        {{ state.data.skyCondition === "sunny" ? "☀️" : "☁️" }}
      </div>
      <div class="temperature">{{ state.data.temperature }}°C</div>
    </div>
    <div class="widget-actions">
      <button (click)="actions.reload()">Reload</button>
      <button (click)="actions.copyData()">Copy Info</button>
    </div>
  `,
  styleUrls: ["./weather-widget.component.css"],
  providers: [WidgetActions, WidgetState],
})
export class WeatherWidgetComponent implements AfterViewInit {
  state = inject(WidgetState);
  actions = inject(WidgetActions);

  @ViewChild("container", { read: ViewContainerRef })
  container!: ViewContainerRef;
  @ViewChild("defaultWidgetHeader")
  headerRef!: TemplateRef<any>;

  ngOnInit(): void {
    // console.log(this.container);
    // console.log(this.headerRef.elementRef.nativeElement)
  }

  ngAfterViewInit(): void {
    console.log(this.container);
    console.log(this.headerRef);

    this.container.createEmbeddedView(this.headerRef)
  }
}
