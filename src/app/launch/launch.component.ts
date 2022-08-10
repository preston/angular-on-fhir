import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Client from 'fhir-kit-client';
import { FhirResource } from 'fhir/r4';
import FHIR from 'fhirclient';
import { fhirclient } from 'fhirclient/lib/types';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-launch',
  templateUrl: 'launch.component.html'
})
export class LaunchComponent implements OnInit {

  iss: string | null = null;
  launch: string | null = null;

  message: string = 'Standby for liftoff.';

  constructor(protected route: ActivatedRoute) { }

  parseParams() {
    this.route.queryParamMap.forEach(n => {
      n.keys.forEach(key => {
        switch (key) {
          case 'iss':
            this.iss = n.get(key);
            break;
          case 'launch':
            this.launch = n.get(key);
            break;
          default:
            console.log('Warning: Unknown launch key \'' + key + '\' with value \'' + n.get(key) + '\'');
            break;
        }
      })
    });
  }

  ngOnInit(): void {
    this.parseParams();

    if (!environment.clientId || environment.clientId == '') {
      this.message = 'Application cannot launch due to a bad deployment configuration. The system administration needs to set a OAuth clientId set via the EXAMPLE_CLIENT_ID environment variable. It is currently set to "' + environment.clientId + '".';
      console.error(this.message);
    } else if (this.iss == null || this.launch == null) {
      this.message = "Application cannot launch because either 'iss' or 'launch' query parameters are not set.";
      console.error(this.message);

    }
    else {
      this.startLaunch();
    }
  }

  // startLaunch() {
    // let fhirClient = new Client({ baseUrl: this.iss! });
    // fhirClient.smartAuthMetadata().then((meta) => {

    //   // Create a new oAuth2 object using the Client capability statement:
    //   const oauth2 = ClientCredentials.create({
    //     client: {
    //       id: environment.clientId
    //     },
    //     auth: {
    //       tokenHost: `${meta.tokenUrl?.protocol}//${meta.tokenUrl?.host}`,
    //       tokenPath: meta.tokenUrl?.pathname,
    //       authorizeHost: `${meta.authorizeUrl?.protocol}//${meta.authorizeUrl?.host}`,
    //       authorizePath: meta.authorizeUrl?.pathname,
    //     },
    //     options: {
    //       authorizationMethod: 'body',
    //     },
    //   });

    //   // Authorization uri definition
    //   const authorizationUri = oauth2.authorizationCode.authorizeURL({
    //     redirect_uri: 'http://localhost:3000/home',
    //     launch: this.launch,
    //     aud: this.iss,
    //     scope: 'launch openid profile user/Patient.read patient/*.*',
    //     state: '3(#0/!~',
    //   });

    //   window.location.href = authorizationUri;
    //   // res.redirect(authorizationUri);
    // });

  // }
  startLaunch(): void {
    console.log("Starting launch with: ");
    console.log("\tiss: " + this.iss);
    console.log("\tlaunch: " + this.launch);

    // patient/Patient.read patient/Observation.read patient/Observation.write
    // let scopes = "launch patient/Patient.read patient/Observation.read patient/Observation.write";
    let scopes = "launch openid profile patient/*.read";
    // No launch parameter provided. This is a standalone launch.
    // if (this.launch === "") {
      // scopes = scopes + " launch/patient";
    // }

    // let scopes = "launch/patient";
    let options: fhirclient.AuthorizeParams = {
      redirectUri: "home",
      clientId: environment.clientId,
      scope: scopes,
      completeInTarget: true
    };
    console.log('Additional launch options: ');
    console.log(options);

    FHIR.oauth2.authorize(options);
  }

}
