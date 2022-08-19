import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';
import * as FHIR from 'fhirclient';
import { FhirService } from '../services/fhir.service';

@Component({
    selector: 'smart-redirect',
    templateUrl: 'redirect.html'
})
export class SmartRedirectComponent implements OnInit {

    code: string | null = null;
    message: string = 'Standby for liftoff.';

    constructor(protected router: Router, protected fhirService: FhirService) { }

    // parseParams() {
    //     this.route.queryParamMap.forEach(n => {
    //         n.keys.forEach(key => {
    //             switch (key) {
    //                 case 'code':
    //                     this.code = n.get(key);
    //                     break;
    //                 default:
    //                     console.log('Warning: Unknown SMART redirect key \'' + key + '\' with value \'' + n.get(key) + '\'');
    //                     break;
    //             }
    //         })
    //     });
    // }

    ngOnInit(): void {
        // this.parseParams();

        if (!environment.clientId || environment.clientId == '') {
            this.message = 'Application cannot launch due to a bad deployment configuration. The system administration needs to set a OAuth clientId set via the EXAMPLE_CLIENT_ID environment variable. It is currently set to "' + environment.clientId + '".';
            console.error(this.message);
        }
        // else if (this.code == null) {
        //     this.message = "Application cannot launch because the OAuth authorization 'code' is null.";
        //     console.error(this.message);

        // }
        else {
            this.doRedirect();
        }
    }


    doRedirect() {
        FHIR.oauth2.ready().then((client) => {
            console.log("OAuth redirect complete! Setting route to application home.");
            const token = client.getAuthorizationHeader();
            if (token) {
                console.log("Bearer token header: " + token);
                this.fhirService.smartClient = client;
                this.fhirService.reinitialize();
                // this.fhirService.reinitialize(token);
            } else {
                console.error("Beaker token is null. This won't do at all! Protected FHIR data cannot be read without it.");                
            }
            this.router.navigateByUrl('/');
        });


    }

}
