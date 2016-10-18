import {Component, Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';


@Injectable()
export class FhirService {

    private base: string;

    getUrl(): string {
        return this.base;
    }

    setUrl(url: string) {
        this.base = url;
    }

    options(): RequestOptions {
        let headers = new Headers({ 'Accept': 'application/json' });
        return new RequestOptions({ headers: headers });
    }

}
