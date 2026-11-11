import {
  Component,
  ComponentRef,
  inject,
  OnInit,
  TemplateRef,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetComponent } from './widget/widget.component';
import { NgComponentOutlet } from '@angular/common';
import { WeatherContentComponent } from './widget/weather-content.component';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <img class="logo" src="./logo.svg" alt="Decoded Frontend" />
    <h1 class="page-title">ngContentOutlet Demo</h1>

    <ng-template #contentTpl>
      <app-weather-content />
    </ng-template>

    <main id="content">
      <!-- <ng-container #container></ng-container> -->
      <ng-container
        [ngComponentOutlet]="component"
        [ngComponentOutletInputs]="componentInputs"
        [ngComponentOutletContent]="content"
      ></ng-container>
      <section class="toolbar">
        <button (click)="createComponent()" class="create">
          Create Component
        </button>
        <button (click)="destroyComponent()" class="destroy">
          Destroy Component
        </button>
      </section>
    </main>
  `,
  imports: [NgComponentOutlet, WeatherContentComponent],
})
export class AppComponent implements OnInit {
  vcr = inject(ViewContainerRef);
  contentTpl = viewChild.required<TemplateRef<unknown>>('contentTpl');
  protected content: Node[][] = []
  protected component: Type<WidgetComponent> | null = null;
  protected componentInputs = {
    title: 'Custom Widget Title',
    description: 'Custom Widget Description',
  };

  ngOnInit(): void {
      console.log(this.vcr)
  }

  createComponent() {
    this.content = [this.vcr.createEmbeddedView(this.contentTpl()).rootNodes]
    this.component = WidgetComponent;
  }

  destroyComponent() {
    this.component = null;
  }
}
// export class AppComponent {
//   container = viewChild('container', {read: ViewContainerRef})
//   #componentRef?: ComponentRef<WidgetComponent>

//   createComponent() {
//     this.#componentRef = this.container()?.createComponent(WidgetComponent);
//   }
//   destroyComponent() {
//     this.#componentRef?.destroy();
//   }
// }
