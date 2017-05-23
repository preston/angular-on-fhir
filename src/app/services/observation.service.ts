import {Component, Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {FhirService} from './fhir.service';
import {Patient} from '../models/patient.model';

@Injectable()
@Component({
})
export class ObservationService {

    private path = '/Observation';

    constructor(private fhirService: FhirService, private http: Http) {
        console.log("ObservationService created...");
    }

    index(patient: Patient): Observable<any> {
        var url = this.fhirService.getUrl() + this.path + "?patient=" + patient.id;
		// console.log("ESNUTH");
        return this.http.get(url, this.fhirService.options()).map(res => res.json());
    }

    // get(id): Observable<any> {
    //     var url = this.fhirService.getUrl() + this.path + '/' + id;
    //     return this.http.get(url, this.fhirService.options()).map(res => res.json());
    // }

}
