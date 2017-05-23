import {Component} from '@angular/core';
import {PatientComponent} from './patient.component';

@Component({
    selector: 'home',
    templateUrl: '/home.html'
})
export class HomeComponent {

	tab: string = 'reader';

    constructor() {
        console.log("HomeComponent has been initialized.");
    }

}
