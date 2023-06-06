import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';

import { environment } from 'src/environments/environment';
import FHIR from 'fhirclient';

@Component({
  selector: 'app-launch',
  templateUrl: 'launch.html'
})
export class SmartLaunchComponent implements OnInit {

  message: string = 'Standby for liftoff.';


  constructor(protected route: ActivatedRoute, protected router: Router, protected serializer: UrlSerializer, protected http: HttpClient) { }


  ngOnInit(): void {

    if (!environment.clientId || environment.clientId == '') {
      this.message = 'Application cannot launch due to a bad deployment configuration. The system administration needs to set a OAuth clientId set via the FHIR_CLIENT_ID environment variable. It is currently set to "' + environment.clientId + '".';
      console.error(this.message);
    }
    else {
      this.startLaunch();
    }
  }

  startLaunch() {
    FHIR.oauth2.authorize({ clientId: environment.clientId, scope: 'launch patient/*.read openid profile', redirectUri: '/redirect' });
  }


}
