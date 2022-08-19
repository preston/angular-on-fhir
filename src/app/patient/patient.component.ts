import { Component, Input } from '@angular/core';


import { Patient } from "fhir/r4";
import { FhirService } from '../services/fhir.service';

@Component({
    selector: 'patient',
    templateUrl: 'patient.html'
})
export class PatientComponent {

    @Input() patient: Patient | undefined;
    // patients: Array<Patient> = [];
    // servers: FhirService[] = FhirService.servers;

    constructor(public fhirService: FhirService) {
        // this.compiler.clearCache();
        // this.selectServer(fhirService.current);
        this.loadData();
    }

    loadData() {

    }

    // loadPatients() {
    //     this.fhirService.client?.search({ resourceType: 'Patient' }).then((data: any) => {
    //         let b = <Bundle>data;
    //         console.log("Loading " + JSON.stringify(b, null, "\t"));
    //         this.patients = <Array<Patient>>data.resource;
    //         console.log("Loaded " + this.total() + " patients.");
    //         if (this.patients?.length > 0) {
    //             this.select(this.patients[0].id!);
    //         }
    //     });
    // }

    // total(): number {
    //     var t = 0;
    //     if (this.patients) {
    //         t = this.patients.length;
    //     }
    //     return t;
    // }

    // select(e: any) {
    //     let patientId: string = e.target.value;
    //     console.log("Selected patient: " + patientId);
    //     this.fhirService.client?.read({ resourceType: 'Patient', id: patientId }).then((p) => {
    //         console.log("Fetched: " + JSON.stringify(p));
    //         this.patient = <Patient>p;
    //     });
    // this.fhirService.client.get(patientId).subscribe((d: any) => {
    //     console.log(this.fhirService.current + " Fetching: " + d);
    //     this.selected = <Patient>d; //.entry['resource'];
    // });
    // }

    // selectServer(server: FhirServer | null) {
    //     if (server) {
    //         console.log("Setting server to: " + server.url);
    //         this.fhirService.current = server;
    //         // this.fhirService.setUrl(server.url);
    //     } this.loadPatients();
    // }


    // selectServerForUrl(e: any) {
    //     let url: string = e.target.value;
    //     this.selectServer(this.serverFor(url));
    // }

    // serverFor(url: string) {
    //     let s: FhirServer | null = null;
    //     for (var server of this.fhirService.servers) {
    //         if (server.url == url) {
    //             s = server;
    //             break;
    //         }
    //     }
    //     return s;
    // }

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
