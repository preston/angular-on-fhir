// Author: Preston Lee

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

  // protected tracer;
  protected code: string | null = null;
  // SMART launch stuff
  // public showPatientBanner = false;
  isWritable = false;


  public today = Date.now();
  public patient: Patient | undefined;

  public url: string | null = null;
  public token: string | null = null;

  public resource_types: { [key: string]: { type: string, path: string } } = {
    'patient': { type: 'Patient', path: '/patient' },
    'observation': { type: 'Observation', path: '/observation' }
  };

  public selected_resource_type: string = 'patient'; //this.resource_types[0];

  public search_text = '';
  public search_results: any[] = [];

  constructor(protected telemetryService: TelemetryService, protected route: ActivatedRoute, public fhirService: FhirService) {
    // this.tracer = telemetryService.tracerProvider.getTracer('angular-on-fhir-tracer');
    // Object.entries(this.resource_types).forEach(n => {
    // });
    for (const k in this.resource_types) {
      console.log("KEY: " + k);
      this.selected_resource_type = k;
    }
    
    // Handle manual initialization when launched via ?url=...&token=...
    this.url = this.route.snapshot.queryParamMap.get('url');
    this.token = this.route.snapshot.queryParamMap.get('token');
    if (this.url && this.token) {
      this.fhirService.reinitializeManually(this.url, this.token);
    } else {


      this.fhirService.client?.read({ resourceType: 'Patient', id: this.fhirService.patient! }).then((r: any) => {
        console.log("Patient read returned: " + r);
        this.patient = r;
        console.log("HomeComponent has been initialized.");
      });
    }
  }

  displayName() {
    let n = '';
    if (this.patient?.name?.length) {
      if (this.patient!.name![0].given) {
        n += this.patient.name[0].given;
      }
      if (this.patient!.name![0].family) {
        n += ' ' + this.patient.name[0].family;
      }
    }
    return n;
  }

  ngOnInit(): void {
    // let span = this.tracer.startSpan('home-component-initialization');
    console.log('Initializing home component.');
  }

  search() {
    console.log('Searching for ' + this.selected_resource_type + ' with: ' + this.search_text);

  }
  
}
