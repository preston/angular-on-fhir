import {Component, Injectable} from 'angular2/core';
import {Headers, RequestOptions} from 'angular2/http';


@Injectable()
export class FhirService {

	private root = 'https://fhir-open-api-dstu2.smarthealthit.org';
	// private root = 'http://alpha-server.healthcreek.org';

	getUrl(): string {
		return this.root;
	}

	options(): RequestOptions {
		let headers = new Headers({ 'Accept': 'application/json' });
    	return new RequestOptions({ headers: headers });
	}

}
