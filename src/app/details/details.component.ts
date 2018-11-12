import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PropertyService, Property } from '../property.service'
import { GalleryItem, ImageItem } from '@ngx-gallery/core';

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

	imgItems() : GalleryItem[] {
		if ( !this._prop.images ) return [];
		return [];
	}

	firstImg() {
		return this._prop.images ? this._prop.images[0] : '';
	}

}
