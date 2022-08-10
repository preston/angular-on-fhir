import {Component} from '@angular/core';

@Component({
    selector: 'api',
    templateUrl: 'api.html'
})
export class ApiComponent {

    constructor() {
        console.log("ApiComponent has been initialized.");
    }

    stringify(obj: any): string {
        return JSON.stringify(obj, null, "\t").trim();
    }

}
