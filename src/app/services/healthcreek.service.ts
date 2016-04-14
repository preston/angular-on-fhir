import {Component, Injectable} from 'angular2/core';

@Injectable()
export class HealthCreekService {

	private root = 'http://localhost:3000';
	// private root = 'http://alpha-server.healthcreek.org';

	getUrl(): string {
		return this.root;
	}

	search(text: string): Object[] {
		return [];
	}

}
