import { Component, OnInit, Input, DoCheck, ViewChild, AfterViewInit } from '@angular/core';
import { FilterService } from './../../../services/filter.service'
import { SelectionMenuComponent } from './../../../home-screen/selectionmenu/selectionmenu.component'
import { IVehicle } from './../../../vehicle'
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  filteredResources: Array<any>;
  dataSource;
  filteredResources2:Array<any>;
  resources:Array<any>;
  selectedResource:IVehicle;
  width=10;
  height=10;
  f1;
  f2;

 selectedView;
 selectedColor;
 displayedColumns=["car_name","vin","iso_id","primary_status","energy_charge","soc","soc_kwh","volts"];


 constructor(private filterService:FilterService) {
   //this.doResize(null, this.starterData);
   this.filteredResources=[];
   this.filteredResources2=[];
   
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
 ngOnInit() {
  this.filteredResources=this.filterService.getFilteredData();
  this.filteredResources2=this.filterService.getFilteredData2();
  this.dataSource = new MatTableDataSource<IVehicle>(this.filteredResources)
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;

  }
  ngAfterViewInit(){
    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngDoCheck(){
  this.dataSource = new MatTableDataSource<IVehicle>(this.filteredResources)
   this.filteredResources=this.filterService.getFilteredData();
   this.filteredResources2=this.filterService.getFilteredData2();
   if(this.filteredResources){
     if(this.filteredResources.length<300){
     this.width=50;
     this.height=50;
     }
     else {
       this.width=30;
       this.height=30;
     }
   }
   if(this.filteredResources2){
     if(this.filteredResources2.length<300){
     this.width=50;
     this.height=50;
     }
     else {
       this.width=30;
       this.height=30;
     }
   }
  }

 //  doResize(event, ui) {
 
 //   var scale, origin;
     
 //   scale = Math.min(
 //     ui.size.width / this.elWidth,    
 //     ui.size.height / this.elHeight
 //   );
 //   this.$el.css({
 //     transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
 //   });
 // }
 // starterData = { 
 //   size: {
 //     width: this.$wrapper.width(),
 //     height: this.$wrapper.height()
 //   }
 // }
 

  resourceDidClick(resource) {
   this.selectedResource = resource;
 }
 setViewName(){

 }


 

}
