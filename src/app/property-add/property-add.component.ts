import { Component, OnInit } from '@angular/core';
import { PropertyService, Property } from '../property.service';


@Component({
  selector: 'app-property-add',
  templateUrl: './property-add.component.html',
  styleUrls: ['./property-add.component.scss']
})
export class PropertyAddComponent implements OnInit {

	public model: Property;
  constructor(private propService: PropertyService) {}

  ngOnInit() {
		this.model = this.propService.defaultProperty();
	}

	addProperty() {
		console.log('Property added!', this.model);

		if (!this.model.title) return;
		if (!this.model.price) return;
		if (!this.model.contact.phone) return;
		if (!this.model.contact.email) return;
		if (!this.model.address.city) return;
		if (!this.model.address.state) return;
		if (!this.model.address.postalCode) return;
		if (!this.model.type) return;
		
		this.propService.addProperty(this.model)
	}
}
