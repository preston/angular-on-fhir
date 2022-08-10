import { Injectable } from '@angular/core';

import Client from 'fhir-kit-client';

import FHIR from 'fhirclient';
// import { fhirclient } from 'fhirclient/lib/types';

import { FhirServer } from '../models/server';
@Injectable({providedIn: 'root'})
export class FhirService {
    public servers: Array<{ name: string, url: string }> = [
        new FhirServer("Example Open Endpoint", "https://api.logicahealth.org/GraphiteTestV450/open")
    ]

    public current: FhirServer = this.servers[0];

    public client: Client;
    // public client = new Client({ baseUrl: this.current.url });

    // reinitialize(bearerToken: string) {
    //     this.client = new Client({ baseUrl: this.current.url, bearerToken: bearerToken });
    // }
}
