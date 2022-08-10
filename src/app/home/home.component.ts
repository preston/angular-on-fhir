import { Component, OnInit } from '@angular/core';
import { PatientComponent } from '../patient/patient.component';

import FHIR from 'fhirclient';
// const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');

import { GraphiteTracerService } from '../services/graphite_tracer.service';
import { context, Span } from '@opentelemetry/api';
// import Client from 'fhir-kit-client';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import Client from 'fhirclient/lib/Client';
import { FhirService } from '../services/fhir.service';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {

  tab: string = 'reader';

  protected tracer;

  // SMART launch stuff
  public showPatientBanner = false;
  protected client: Client | undefined;
  isWritable = false;

  constructor(protected tracerService: GraphiteTracerService, protected route: ActivatedRoute, protected fhirService: FhirService) {
    this.tracer = tracerService.tracerProvider.getTracer('angular-on-fhir-tracer');
    console.log("HomeComponent has been initialized.");
  }


  ngOnInit(): void {
    let span = this.tracer.startSpan('home-component-initialization');
    console.log('Initializing home component.');

    FHIR.oauth2.ready().then(client => {
      this.client = client;
      console.log("ID Token: " + client.getIdToken());

      console.log(client.getAuthorizationHeader());

      this.fhirService.reinitialize(client.getAuthorizationHeader()!);
      console.log("Configured fhir-kit-client to use bearer token: " + this.fhirService.client.bearerToken);

      this.showPatientBanner = client.getState('tokenResponse.need_patient_banner');
      console.log('Show patient banner: ' + this.showPatientBanner);
      // this.client.
      // this.setWritableScope(client);
    });
    span.end();
  }

  // setWritableScope(client: Client) {
  //     var writable = false;
  //     var scope: string = client.getState('tokenResponse.scope');
  //     var scopes = scope ? scope.split(" ") : [];
  //     scopes.forEach(value => {
  //       if (value === "patient/*.*" ||
  //         value === "patient/*.write" ||
  //         value === "patient/Observation.write" ||
  //         value === "user/*.write" ||
  //         value === "user/*.*"
  //       ) {
  //         writable = true;
  //       }
  //     });

  //     this.isWritable = writable;
  //     return writable;
  //   }

}
