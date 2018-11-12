import { Injectable } from '@angular/core';
import { Property, PROPERTIES } from './properties'
export * from './properties';

@Injectable({
	providedIn: 'root'
})
export class PropertyService {

	private props: Property[];

	constructor() {
		this.props = PROPERTIES;
	}

	getProperties(): Property[] {
		return this.props;
	}

	addProperty(prop: Property) {
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
			"images": [ "http://lorempixel.com/grey/1920/1080/city/" ]
		}
	}

}
