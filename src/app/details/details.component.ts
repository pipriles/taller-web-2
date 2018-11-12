import { Component, OnInit, Input } from '@angular/core';
import { PropertyService, Property } from '../property.service'

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

	public _show: boolean;
	public _prop: Property;
	constructor(private propService: PropertyService) {}

	get property() {
		return this._prop;
	}

	@Input()
	set property(prop: Property) {
		if ( !prop ) {
			this._prop = this.propService.defaultProperty();
			this._show = false;
		}
		else {
			this._prop = prop;
			this._show = true;
		}
	}

	ngOnInit() {
		this._prop = this.propService.defaultProperty();
		this._show = false;
	}

}
