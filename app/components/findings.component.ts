import {Component, Input} from '@angular/core';
import {FhirService} from '../services/fhir.service';
// import {PatientService} from '../services/patient.service';
import {Finding} from '../models/finding.model';
import {Patient} from '../models/patient.model';

@Component({
	selector: 'findings',
	templateUrl: 'app/components/findings.html'
})
export class FindingsComponent {

	selected: Finding;
	findings: Array<Finding>;
	@Input() patient: Patient;

	constructor(private fhirService: FhirService) {
		console.log("FindingsService created...");
	}

}
