import { makeEnvironmentProviders, provideEnvironmentInitializer, inject } from "@angular/core";
import { DataPolling } from "./data-polling";

export function providePolling(scopes: string[]) {
  return makeEnvironmentProviders([
    DataPolling,
    provideEnvironmentInitializer(() => {
      const dataPolling = inject(DataPolling);
      dataPolling.setScope(scopes);
      dataPolling.start();
    })
  ])
}