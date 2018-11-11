import { Component, OnInit, Input } from '@angular/core';
import { PropertyService } from '../property.service'

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

	private _show: boolean;
	private _prop: object;
	constructor(private propService: PropertyService) {}

	get property() {
		return this._prop;
	}

	@Input()
	set property(prop: object) {
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
