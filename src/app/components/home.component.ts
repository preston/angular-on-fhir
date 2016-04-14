import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home.html',
    directives: []
})
export class HomeComponent {

	tab: string = 'reader';

    constructor() {
        console.log("HomeComponent has been initialized.");
    }

}
