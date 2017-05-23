import {Component, Injectable} from '@angular/core';

@Injectable()
export class HealthCreekService {

	// private root = 'http://localhost:3000';
	private root = 'http://server.healthcreek.org';

	getUrl(): string {
		return this.root;
	}

	search(text: string): Object[] {
		return [];
	}

}
