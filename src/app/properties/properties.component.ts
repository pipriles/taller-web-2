import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PropertyService, Property } from '../property.service'

@Component({
	selector: 'app-properties',
	templateUrl: './properties.component.html',
	styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {

	@Output() selected = new EventEmitter<object>();

	public props: Property[];

	constructor(private propService: PropertyService) { 
		this.props = [];
	}

	ngOnInit() {
		this.props = this.propService.getProperties();
	}

	selectProperty(prop: Property) {
		console.log(prop);
		this.selected.emit(prop);
	}

	firstImageUrl(prop: Property) {
		let imageUrl = prop.images.length > 0 
			? prop.images[0] 
			: "/assets/moderne.jpg";
		return { 'background-image': `url("${imageUrl}")` };
	}

}
