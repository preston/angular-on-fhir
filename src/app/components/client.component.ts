import {Component} from '@angular/core';

import {HealthCreekService} from '../services/healthcreek.service';

@Component({
	selector: 'clients',
	templateUrl: '/client.html'
})
export class ClientComponent {

	selected: Client;
	constructor(private healthCreekService: HealthCreekService) {

	}

}
