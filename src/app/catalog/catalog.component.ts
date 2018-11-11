import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

	public current: object;

  ngOnInit() {
		this.current = {};
	}

	onSelect(prop: object) {
		this.current = prop;
	}

}
