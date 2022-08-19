import { Component, OnInit } from '@angular/core';

// const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');

import { TelemetryService } from '../services/telemetry.service';
import { ActivatedRoute } from '@angular/router';

import { FhirService } from '../services/fhir.service';
import { Patient } from 'fhir/r4';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {

  tab: string = 'reader';

  protected tracer;
  protected code: string | null = null;
  // SMART launch stuff
  // public showPatientBanner = false;
  isWritable = false;


  public today = Date.now();
  public patient: Patient | undefined;

  constructor(protected telemetryService: TelemetryService, protected route: ActivatedRoute, public fhirService: FhirService) {
    this.tracer = telemetryService.tracerProvider.getTracer('angular-on-fhir-tracer');

    this.fhirService.client?.read({ resourceType: 'Patient', id: this.fhirService.patient! }).then((r: any) => {
      console.log("Patient read returned: " + r);
      this.patient = r;
      console.log("HomeComponent has been initialized.");
    });

  }

  displayName() {
    let n = '';
    if (this.patient?.name?.length) {
      if (this.patient!.name![0].given) {
        n += this.patient.name[0].given;
      }
      if (this.patient!.name![0].family) {
        n += this.patient.name[0].family;
      }
    }
    return n;
  }

  ngOnInit(): void {
    let span = this.tracer.startSpan('home-component-initialization');
    console.log('Initializing home component.');


    // this.client = client;
    // console.log("ID Token: " + client.getIdToken());

    // console.log(client.getAuthorizationHeader());

    // this.fhirService.client.bearerToken = client.getAuthorizationHeader()!;
    // // this.fhirService.reinitialize(client.getAuthorizationHeader()!);
    // console.log("Configured fhir-kit-client to use bearer token: " + this.fhirService.client.bearerToken);

    // this.showPatientBanner = client.getState('tokenResponse.need_patient_banner');
    // console.log('Show patient banner: ' + this.showPatientBanner);
    // this.setWritableScope(client);
    span.end();
  }

}
