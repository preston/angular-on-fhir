// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

let w = (window as { [key: string]: any })
if (!w['configuration']) {
  console.error('Missing generated runtime configuration from environment variables. Application will not function correctly. Please verify you are starting the application correctly.');
}
export const environment = {
  production: true,
  clientId: w["configuration"]["clientId"],
  debug: w["configuration"]["debug"] || false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
