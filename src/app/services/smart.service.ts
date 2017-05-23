import {Component, Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {CookieService} from 'angular2-cookie/core';
import {FhirService} from '../services/fhir.service';
import {PatientService} from '../services/patient.service';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class SmartService {

    constructor(private fhirService: FhirService, private patientService: PatientService, private http: Http, private cookieService: CookieService) {
        console.log("SmartService has been initialized.");
    }

    fhirBaseUrl: string;
    authorizeUrl: string;
    tokenUrl: string;
    clientId: string = "82b330f7-1186-4059-8c31-62dce4b18d77";
    launch: string;
    scope: string = "launch patient/*.* openid profile";
    redirectUri: string = "http://patient-viewer.healthcreek.org";
    state: string;
    aud: string;

    authenticate() {

      this.fhirBaseUrl = this.findGetParameter("iss");
      if(this.fhirBaseUrl) {
        this.aud = this.fhirBaseUrl;
        this.launch = this.findGetParameter("launch");

        this.fhirService.setUrl(this.fhirBaseUrl);
        this.patientService.path = '/metadata';
        this.patientService.index(false).subscribe(data => {
            this.authorizeUrl = data.rest[0].security.extension[0].extension[0].valueUri;
            this.tokenUrl = data.rest[0].security.extension[0].extension[1].valueUri;
            this.cookieService.put('tokenUrl', this.tokenUrl);
            this.cookieService.put('fhirBaseUrl', this.fhirBaseUrl);
            this.requestAuth();
        });
      }
      else {
        if (this.cookieService.get('state') == this.findGetParameter('state')){
            return this.getToken();
          }
        else{
          console.log('Stop cross-site scripting please, thanks');
        }
      }


    }

    getToken() {
      var code = this.findGetParameter("code");
      var body = 'code='+code+'&redirect_uri='+encodeURI(this.redirectUri)+'&token_url='+this.cookieService.get('tokenUrl');

      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this.http.post("http://mongo-proxy.healthcreek.org/token",body, {headers: headers}).map(response => response.json());
    }
    requestAuth() {
      //encodeURI
      //TODO Fix hashing method - not sure best way to do it
      this.state = (Md5.hashStr("testing Hasing")).toString();
      this.cookieService.put('state', this.state);
      var request = this.authorizeUrl+"?response_type=code"
      + "&client_id="+this.clientId
      + "&redirect_uri="+this.redirectUri
      + "&launch="+this.launch
      + "&scope="+this.scope
      + "&state="+this.state
      + "&aud="+this.aud;

      window.location.href = encodeURI(request);
    }
    findGetParameter(parameterName) {
      var result = null,
          tmp = [];
      location.search
      .substr(1)
          .split("&")
          .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
      });
      return result;
    }

}
