/// <reference path="../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {enableProdMode, provide} from 'angular2/core';

// Custom app stuff.
import {HealthCreekUiApp} from './app/healthcreek';
enableProdMode();
bootstrap(HealthCreekUiApp, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    // provide(APP_BASE_HREF, {useValue: '/'})
]).catch(err => console.error(err));
