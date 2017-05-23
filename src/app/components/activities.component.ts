import {Component, Input} from '@angular/core';
import {FhirService} from '../services/fhir.service';
// import {PatientService} from '../services/patient.service';
import {Activity} from '../models/activity.model';
import {Patient} from '../models/patient.model';

@Component({
    selector: 'activities',
    templateUrl: '/activities.html'
})
export class ActivitiesComponent {

    selected: Activity;
    activities: Array<Activity>;
    @Input() patient: Patient;

    constructor(private fhirService: FhirService) {
        console.log("ActivityService created...");
    }

}
