import { Injectable } from '@angular/core';

import * as FKClient from 'fhir-kit-client';

import * as SmartClient from 'fhirclient/lib/Client';

import { FhirServer } from '../models/server';
@Injectable({ providedIn: 'root' })
export class FhirService {

    // public servers: Array<{ name: string, url: string }> = [
    //     new FhirServer("Example Open Endpoint", "https://api.logicahealth.org/GraphiteTestV450/open")
    // ]

    // public current: FhirServer = this.servers[0];

    public client: FKClient.default | undefined;
    public smartClient: SmartClient.default | undefined;
    // public client = new Client({ baseUrl: this.current.url });

    public patient: string | null | undefined;

    constructor() {
        // this.client = new FKClient.default();
        // this.client = new FKClient.default({ baseUrl: this.current.url });
        // this.reinitialize();
        // this.smartClient = new SmartClient.default();
    }

    reinitialize() {
        // bearerToken: string
        this.client = new FKClient.default({
            baseUrl: this.smartClient?.state.serverUrl!,
            bearerToken: this.smartClient?.getAuthorizationHeader()!.substring('Bearer '.length),
        });
        // this.client.
        this.patient = this.smartClient?.patient.id;
    }

}
