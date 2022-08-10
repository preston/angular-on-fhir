import {Component, Input} from '@angular/core';
import {FhirService} from '../services/fhir.service';
import {Observation, Patient} from 'fhir/r4';

@Component({
	selector: 'observations',
	templateUrl: 'observations.html'
})
export class ObservationsComponent {

	selected: Observation | undefined;
	observations: Array<Observation> = [];
	@Input() patient: Patient | undefined;

	constructor(private fhirService: FhirService) {
		console.log("ObservationsComponent created...");
	}

	ngOnChanges() {
		if (this.patient) {
			this.fhirService.client.search({resourceType: 'Observation', compartment: {resourceType: 'Patient', id: this.patient.id!}}).then(data => {
				if(data.entry) {
					this.observations = <Array<Observation>>data.resource;
					console.log("Loaded " + this.observations.length + " observations.");
				} else {
					this.observations = new Array<Observation>();
					console.log("No observations for patient.");
				}
			});
		}
	}

}
