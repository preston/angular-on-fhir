import {Component} from '@angular/core';
import {FhirService} from '../services/fhir.service';
import {PatientService} from '../services/patient.service';
import {Patient} from '../models/patient.model';

@Component({
	selector: 'patients',
	templateUrl: 'app/components/patient.html'
})
export class PatientComponent {

	selected: Patient;
	patients: Array<Patient>;
	total: number;

	constructor(private patientService: PatientService) {
		this.patientService.index().subscribe(d => {
				this.patients = <Array<Patient>>d.entry;
		});
	}

}
