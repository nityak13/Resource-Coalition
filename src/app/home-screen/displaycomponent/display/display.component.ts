import { Component, OnInit, Input, DoCheck, ViewChild, AfterViewInit } from '@angular/core';
import { FilterService } from './../../../services/filter.service'
import { SelectionMenuComponent } from './../../../home-screen/selectionmenu/selectionmenu.component'
import { IVehicle } from './../../../vehicle'
import { ArrayComponent } from './../array/array.component';
import { ListComponent } from './../list/list.component';
import { MapComponent } from './../map/map.component';
//import * as $ from 'jquery'


@Component({
  selector: 'display-component',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

   filteredResources: Array<any>;
   filteredResources2:Array<any>;
   resources:Array<any>;
   selectedResource:IVehicle;
   width=10;
   height=10;
   flagKey;
   f1;
   f2;

  selectedView;
  selectedColor;
  clearDisplay;
  
 

  constructor(private filterService:FilterService) {
    
    this.filteredResources=[];
    this.filteredResources2=[];
   }

  ngOnInit() { 
   

   }
   ngAfterViewInit(){
    
   }
   ngOnChanges(){
    this.filteredResources=this.filterService.getFilteredData();
    this.filteredResources2=this.filterService.getFilteredData2()

   }
    
   ngDoCheck(){
    
    this.filteredResources=this.filterService.getFilteredData();
    this.filteredResources2=this.filterService.getFilteredData2();
    if(this.filteredResources){
      if(this.filteredResources.length<300){
      this.width=40;
      this.height=40;
      }
      else if(this.filteredResources.length>1000) {
        this.width=15;
        this.height=15;
      }
      else {
        this.width=30;
        this.height=30;
      }
    }
    if(this.filteredResources2){
      if(this.filteredResources2.length<300){
      this.width=40;
      this.height=40;
      }
      else if(this.filteredResources2.length>1000) {
        this.width=15;
        this.height=15;
      }
      else {
        this.width=30;
        this.height=30;
      }
    }
   }

  

  

   resourceDidClick(resource) {
    this.selectedResource = resource;
  }
  setViewName(){

  }
 

  

}
