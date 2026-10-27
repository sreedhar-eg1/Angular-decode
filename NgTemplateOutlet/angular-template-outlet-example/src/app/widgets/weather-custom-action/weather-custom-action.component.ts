import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetActions } from "../widget-actions.service";

@Component({
  selector: "app-weather-custom-action",
  standalone: true,
  imports: [CommonModule],
  template: ` <button (click)="onClick()">Reload & Copy</button> `,
  styles: [],
})
export class WeatherCustomActionComponent {
  actions = inject(WidgetActions);

  onClick() {
    this.actions.reload();
    this.actions.copyData();
  }
}
