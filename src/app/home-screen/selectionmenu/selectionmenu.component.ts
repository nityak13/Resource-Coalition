import { Component, OnInit, ViewChild } from '@angular/core';
import { IsolistService } from './../../services/isoList.service'
import { VehicleService } from './../../services/vehicle.service'
import { Subscription }   from 'rxjs/Subscription';
import { IVehicle } from './../../vehicle';
import { FilterService } from './../../services/filter.service'
import { FilterComponent } from './../filtercomponent/filter/filter.component';


@Component({
  selector: 'selection-menu',
  templateUrl: './selectionmenu.component.html',
  styleUrls: ['./selectionmenu.component.scss'],
  
  
})
export class SelectionMenuComponent implements OnInit {
  
  isoList: Array<any>;
  errorMessage:String;
  resources: Array<any>;
  isoValue: String;
  statusValue: String;
  filteredResources:Array<IVehicle>;
  filteredResources2:Array<IVehicle>;
  flagIso=false;
  flagStatus=false; 
  resourcesToShow: IVehicle;
  selected: String;
  display: Boolean = false;
  @ViewChild('filter')
  private filter:FilterComponent;
 
  filterFlag=false;
  statusList = ["NK", "NC", "GI", "CH", "OE", "VE"]
  
  constructor(private isolistService: IsolistService, private filterService: FilterService, private vehicleService:VehicleService) {
    this.isoList=[];
    this.resources=[];
    this.filteredResources=[];
    this.filteredResources2=[];

  }

  ngOnInit() {
    this.isolistService.getISO()
      .subscribe(isoList => {
        this.isoList = isoList;
        },
  error => this.errorMessage = <any>error);
  
  this.vehicleService.getIVS()
  .subscribe(resources => {
    this.resources = resources;
 JSON.stringify(this.resources);
  },
  error => this.errorMessage = <any>error);

    
  }
  filterResources(val)
  {(this.filter.filterResource(val));}

  allResources(event){
    this.resources;
    console.log(this.resources);}
  
  }
  

