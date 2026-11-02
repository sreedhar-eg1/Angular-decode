import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  TitleStrategy,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class CustomTitleStrategyService extends TitleStrategy {
  updateTitle(snapshot: RouterStateSnapshot): void {
    console.log(snapshot)
    const detailsOutlet = snapshot.root.children.find(r => r.outlet === 'details')
    let title = this.buildTitle(snapshot)

    if (detailsOutlet) {
      title = `${title} ---> ${detailsOutlet.routeConfig?.title}`
    }

    if (title) {
      this.title.setTitle(`App - ${title}`)
    }
  }

  constructor(private title: Title) {
    super();
  }
}
