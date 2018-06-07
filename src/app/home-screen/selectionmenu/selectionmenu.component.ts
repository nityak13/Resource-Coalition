import { Component, OnInit, ViewChild } from '@angular/core';
import { IsolistService } from './../../services/isoList.service'
import { VehicleService } from './../../services/vehicle.service'
//import { PropertySharingService } from './../../services/property-sharing.service';
import { Subscription }   from 'rxjs/Subscription';
import { IVehicle } from './../../vehicle';
import { FilterService } from './../../services/filter.service'
import { FilterComponent } from './../filtercomponent/filter/filter.component';
import { DisplayComponent } from './../displaycomponent/display/display.component';
import { ArrayComponent } from './../displaycomponent/array/array.component';
import { Event } from '@angular/router/src/events';


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
  @ViewChild(DisplayComponent)
  private displayComponent:DisplayComponent;
  @ViewChild(FilterComponent)
  private filterComponent: FilterComponent;
  private filter:FilterComponent;
  viewName = ["Array", "Map", "List"];
  colorName = ["Status", "Power", "SOC", "%SOC"]
  selectedView;
  selectedColor;
  clearDisplay=true;
  filterFlag=false;
  statusList = ["NK", "NC", "GI", "CH", "OE", "VE"]
  
  constructor(private isolistService: IsolistService) {
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

  
  
  }
  clearSelection(){
    this.filterComponent.clearSelection();
    this.selectedView=null;
    this.selectedColor=null;
    this.selected=null;
    this.clearDisplay=false;

  }
 
  filterResources(val:String)
  {
  console.log(val);
    this.filterComponent.filterResource(val);
    
  }

   allResources(event){
    this.resources;
    console.log(this.resources);}

    onSelectView(val){
      
      this.selectedView=val;
      this.displayComponent.selectedView=this.selectedView;
      console.log(this.selectedView); 
     
    }

    onSelectColor(color){
      this.selectedColor=color;
      this.displayComponent.selectedColor=this.selectedColor;
      console.log(this.selectedColor)
    }
  
  }
  

