import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DataTablesModule } from 'angular-datatables';
import 'hammerjs';

import { VehicleService } from './services/vehicle.service';
import { IsolistService } from './services/isoList.service';
import { FilterService } from './services/filter.service';
import { PropertySharingService } from './services/property-sharing.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockData } from './mock-data/mock.data';

//angular-material module for styles
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatSidenavModule,MatMenuModule,
  MatToolbarModule,MatCheckboxModule,MatSelectModule, MatListModule,MatButtonToggleModule,MatTableModule,
  MatExpansionModule,MatCardModule
} from '@angular/material';
import { ResizableModule } from 'angular-resizable-element';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './home-screen/navbar/navbar.component';
import { SelectionMenuComponent } from './home-screen/selectionmenu/selectionmenu.component';
import { FilterComponent } from './home-screen/filtercomponent/filter/filter.component';
import { DisplayComponent } from './home-screen/displaycomponent/display/display.component';
import { ArrayComponent } from './home-screen/displaycomponent/array/array.component';
import { MapComponent } from './home-screen/displaycomponent/map/map.component';
import { ListComponent } from './home-screen/displaycomponent/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    SelectionMenuComponent,
    NavbarComponent,
    FilterComponent,
    DisplayComponent,
    ArrayComponent,
    MapComponent,
    ListComponent,
    
    
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    InMemoryWebApiModule.forRoot(MockData),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatButtonToggleModule,
    MatTableModule,
    MatExpansionModule,
    MatCardModule,
    ResizableModule,
    FlexLayoutModule,
    DataTablesModule
  ],
  exports: [],
  providers: [ IsolistService, FilterService, VehicleService, PropertySharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

