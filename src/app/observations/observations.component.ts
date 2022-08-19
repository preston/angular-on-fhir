import { Component, Input } from '@angular/core';
import { FhirService } from '../services/fhir.service';
import { Bundle, Observation, Patient } from 'fhir/r4';

@Component({
	selector: 'observations',
	templateUrl: 'observations.html'
})
export class ObservationsComponent {

	selected: Observation | undefined;
	// observations: Array<Observation> = [];
	@Input() patient: Patient | undefined;

	public observationBundle: Bundle<Observation> | undefined;

	constructor(private fhirService: FhirService) {
		console.log("ObservationsComponent created...");
		// this.fhirService.client?.compartmentSearch({resourceType: 'Observation', compartment: {resourceType: 'Patient', id: this.fhirService.patient!}}).then((obs: any) => {
		this.fhirService.client?.search({ resourceType: 'Observation', searchParams: { subject: 'Patient/' + this.fhirService.patient! } }).then((b: any) => {
			this.observationBundle = b;
			if (this.observationBundle?.entry?.length) {
				console.log("Loaded " + this.observationBundle.entry.length + " observations.");
			} else {
				console.log("No observations loaded for patient!");
			}

		});
	}

	ngOnChanges() {
	}

}
