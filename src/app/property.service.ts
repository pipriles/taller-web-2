import { Injectable } from '@angular/core';
import { PROPERTIES } from './properties'

@Injectable({
	providedIn: 'root'
})
export class PropertyService {

	private props: object[];

	constructor() {
		this.props = PROPERTIES;
	}

	getProperties(): object[] {
		return this.props;
	}

	addProperty(prop: object) {
		this.props.push(prop);
	}

	defaultProperty() {
		return {
			"title": '',
			"description": '',
			"location": {
				"lat": 0, 
				"lng": 0
			},
			"address": {
				"city": "",
				"state": "",
				"postalCode": "",
				"streetAddress": ""
			},
			"contact": {
				"email": "",
				"phone": ""
			},
			"type": "",
			"available": false,
			"price": null,
			"images": []
		}
	}

}
