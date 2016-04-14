import {Component, Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

import {HealthCreekService} from './healthcreek.service';

@Injectable()
@Component({
    providers: [Http, HealthCreekService]
})
export class SearchService {

    constructor(private healthCreekService: HealthCreekService, private http: Http) {
    }

    search(resource, searchText) {
		// console.log("Search " + resource + " for " + searchText);
        var url = this.healthCreekService.getUrl() + '/' + resource + '/search.json';
		var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

		var args = "text=" + searchText;
        return this.http.post(url, args, {headers: headers}).map(res => res.json());
    }

}
