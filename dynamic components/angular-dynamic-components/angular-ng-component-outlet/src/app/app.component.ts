import {
  Component,
  ComponentRef,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { WidgetComponent } from './widget/widget.component';
import { NgComponentOutlet } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <img class="logo" src="./logo.svg" alt="Decoded Frontend" />
    <h1 class="page-title">ngContentOutlet Demo</h1>

    <main id="content">
      <!-- <ng-container #container></ng-container> -->
      <ng-container [ngComponentOutlet]="component"></ng-container>
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
  imports: [NgComponentOutlet],
})
export class AppComponent {
  protected component: Type<WidgetComponent> | null = null;

  createComponent() {
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
