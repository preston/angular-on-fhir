import {Component, Input} from '@angular/core';

import {FhirService} from '../services/fhir.service';

import {Condition, Patient} from 'fhir/r4';


@Component({
    selector: 'conditions',
    templateUrl: 'conditions.html'
})
export class ConditionsComponent {

    selected: Condition | undefined;
    conditions: Array<Condition> = [];
    @Input() patient: Patient | undefined;

    constructor(private fhirService: FhirService) {
        console.log("ConditionsService created...");
    }

    ngOnChanges() {
        if (this.patient) {
            this.fhirService.client?.search({resourceType: 'Condition', compartment: {resourceType: 'Patient', id:  this.patient.id!}}).then((data) => {
				if(data.entry) {
                	this.conditions = <Array<Condition>>data.resource;
                	console.log("Loaded " + this.conditions.length + " conditions.");
				} else {
					this.conditions = new Array<Condition>();
					console.log("No conditions for patient.");
				}
            });
        }
    }

}
