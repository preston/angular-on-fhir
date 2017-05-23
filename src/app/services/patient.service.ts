import {Component, Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {FhirService} from './fhir.service';

@Injectable()
@Component({
})
export class PatientService {

    public path = '/Patient';
    private patients;
    // private options: Headers = new Headers;["Accept: application/json";

    constructor(private fhirService: FhirService, private http: Http) {
        console.log("PatientService created...");
    }

    index(): Observable<any> {
        var url = this.fhirService.getUrl() + this.path;
        // this.http.get
        return this.http.get(url, this.fhirService.options()).map(res => res.json());
    }

    get(id): Observable<any> {
        var url = this.fhirService.getUrl() + this.path + '/' + id;
        return this.http.get(url, this.fhirService.options()).map(res => res.json());
    }

}
