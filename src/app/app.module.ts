import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { 
	MatButtonModule, 
	MatCardModule,
	MatSidenavModule,
	MatToolbarModule,
	MatIconModule,
	MatListModule,
	MatGridListModule,
	MatDividerModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule
} from '@angular/material'
import { GalleryModule } from  '@ngx-gallery/core';

import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';
import { DetailsComponent } from './details/details.component';
import { PropertyAddComponent } from './property-add/property-add.component';
import { CatalogComponent } from './catalog/catalog.component';

const appRoutes: Routes = [
	{ path: 'create',     component: PropertyAddComponent },
	{ path: 'properties', component: CatalogComponent },
	{ path: '', redirectTo: '/properties', pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		PropertiesComponent,
		DetailsComponent,
		PropertyAddComponent,
		CatalogComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		RouterModule.forRoot(appRoutes, {
			onSameUrlNavigation: 'reload'
		}),
		FlexLayoutModule,

		/* Angular Material */
		BrowserAnimationsModule,
		MatCardModule,
		MatButtonModule,
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule,
		MatGridListModule,
		MatDividerModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,

		/* Angular Gallery */
		GalleryModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
