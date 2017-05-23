import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: '/app.html'
})
export class AppComponent {

    constructor() {
        console.log("AppComponent has been initialized.");
    }

}
