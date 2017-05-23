import {Component, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {HealthCreekService} from './healthcreek.service';

@Injectable()
@Component({
})
export class UserService {

	private path = '/User';
	private users;

	constructor(private healthCreekService: HealthCreekService, private http: Http) {
	}

	index() {
		var url = this.healthCreekService.getUrl() + this.path;
		return this.http.get(url).map(res => res.json());
	}

}
