import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { TabVisibilityMonitor } from './core/tab-visibility-monitor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkActive, RouterLink, MatToolbarModule, MatButton],
  template: `
    <mat-toolbar>
      <img class="logo" src="./logo.svg" alt="Decoded Frontend" />
      <div>
        <a
          [routerLinkActiveOptions]="{ exact: true }"
          routerLinkActive="active"
          mat-stroked-button
          routerLink="/"
          >Courses</a
        >
        <a
          [routerLinkActiveOptions]="{ exact: true }"
          routerLinkActive="active"
          mat-stroked-button
          routerLink="/users"
          >Users</a
        >
      </div>
    </mat-toolbar>
    <main id="content">
      <router-outlet />
    </main>
  `,
})
export class App implements OnInit {
  
  ngOnInit() {
    
  }

}
