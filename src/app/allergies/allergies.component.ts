import {Component, Input} from '@angular/core';
import {FhirService} from '../services/fhir.service';
// import {PatientService} from '../services/patient.service';
import {AllergyIntolerance, Patient} from 'fhir/r4';

@Component({
    selector: 'allergies',
    templateUrl: 'allergies.html'
})
export class AllergiesComponent {

    selected: AllergyIntolerance | undefined;
    allergies: Array<AllergyIntolerance> = [];
    @Input() patient: Patient | undefined;

    constructor(private fhirService: FhirService) {
        console.log("ActivityService created...");
    }

}
