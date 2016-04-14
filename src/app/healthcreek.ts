import {Component} from 'angular2/core';
// import {RouteConfig} from 'angular2/router';
import {RouteConfig, Route, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './components/home.component';
import {ApiComponent} from './components/api.component';

@Component({
    selector: 'healthcreek-app',
    templateUrl: 'app/healthcreek.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [],
    styleUrls: [
        // 'app/healthcreek-ui.css'
    ]
})
@RouteConfig([
    new Route({path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true}),
    new Route({path: '/api', name: 'Api', component: ApiComponent})
])
export class HealthCreekUiApp {
}
