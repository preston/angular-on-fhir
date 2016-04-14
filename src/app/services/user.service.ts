import {Component, Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

import {HealthCreekService} from './healthcreek.service';

@Injectable()
@Component({
	providers: [Http, HealthCreekService]
})
export class UserService {

	private path = '/users.json';
	private users;

	constructor(private healthCreekService: HealthCreekService, private http: Http) {
	}

	index() {
		var url = this.healthCreekService.getUrl() + this.path;
		return this.http.get(url).map(res => res.json());
	}

}
