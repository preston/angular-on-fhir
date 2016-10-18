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

    constructor(private patientService: PatientService) {
        this.patientService.index().subscribe(data => {
            this.patients = <Array<Patient>>data.entry.map(r => r['resource']);
            console.log("Loaded " + this.total() + " patients.");
            if (this.patients.length > 0) {
                this.select(this.patients[0].id);
            }
        });
    }

    total(): number {
        var t = 0;
        if (this.patients) {
            t = this.patients.length;
        }
        return t;
    }

    select(id) {
        console.log("Selected patient: " + id);
        this.patientService.get(id).subscribe(d => {
            console.log("Fetching: " + d);
            this.selected = <Patient>d; //.entry['resource'];
        });
    }

    genderString(patient: Patient) {
        var s = 'Unknown';
        switch (patient.gender) {
            case 'female':
                s = 'Female';
                break;
            case 'male':
                s = 'Male';
                break;
        }
        return s;
    }

}
