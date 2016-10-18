import {Component} from '@angular/core';
import {FhirService} from '../services/fhir.service';
import {ServerService} from '../services/server.service';
import {PatientService} from '../services/patient.service';
import {Patient} from '../models/patient.model';
import {Server} from '../models/server.model';

@Component({
    selector: 'patients',
    templateUrl: 'app/components/patient.html'
})
export class PatientComponent {

    selected: Patient;
    patients: Array<Patient>;
    server: Server;

    servers: Server[] = ServerService.servers;


    constructor(private fhirService: FhirService, private patientService: PatientService) {
        this.selectServer(this.servers[0]);
        this.loadPatients();
    }
    loadPatients() {
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

	selectServer(server: Server) {
		console.log("Setting server to: " + server.url);
		this.server = server;
		this.fhirService.setUrl(server.url);
		this.loadPatients();
	}


    selectServerForUrl(url: string) {
		this.selectServer(this.serverFor(url));
    }

    serverFor(url: string) {
        var obj: Server = null;
        for(var server of this.servers) {
            if (server.url == url) {
                obj = server;
                break;
            }
        }
        return obj;
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
