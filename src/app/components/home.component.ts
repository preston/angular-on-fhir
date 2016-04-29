import {Component} from 'angular2/core';
import {PatientComponent} from './patient.component';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home.html',
    directives: [PatientComponent]
})
export class HomeComponent {

	tab: string = 'reader';

    constructor() {
        console.log("HomeComponent has been initialized.");
    }

}
