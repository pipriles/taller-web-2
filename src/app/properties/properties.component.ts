import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PropertyService } from '../property.service'

@Component({
	selector: 'app-properties',
	templateUrl: './properties.component.html',
	styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {

	@Output() selected = new EventEmitter<object>();

	private props: object[];

	constructor(private propService: PropertyService) { 
		this.props = [];
	}

	ngOnInit() {
		this.props = this.propService.getProperties();
	}

	selectProperty(prop: object) {
		console.log(prop);
		this.selected.emit(prop);
	}

}
