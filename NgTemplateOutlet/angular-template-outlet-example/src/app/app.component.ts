import { Component } from '@angular/core';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';
import { WeatherCustomActionComponent } from './widgets/weather-custom-action/weather-custom-action.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherWidgetComponent, WeatherCustomActionComponent],
  template: `
    <weather-widget [contentTemplate]="alternateContent" [actionTemplate]="alternateActions"></weather-widget>
    <ng-template #alternateTemplate>
      <div class="alt-weather">Today's weather</div>
    </ng-template>
    <!-- <ng-template #alternateContent let-state>  => In case of $implicit variable used-->
    <ng-template #alternateContent let-state="state">
      <div>
        <span>🌡️ {{state.data.temperature}}</span>
        <span>{{ state.data.skyCondition === "sunny" ? "☀️" : "☁️" }}</span>
        <span>🍃 {{state.data.windspeed}}</span>
      </div>
    </ng-template>
    <ng-template #alternateActions>
      <app-weather-custom-action></app-weather-custom-action>
    </ng-template>
  `,
  styles: [`
    :host {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class AppComponent {
}
