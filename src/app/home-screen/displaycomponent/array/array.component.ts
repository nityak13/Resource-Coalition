import { Component, OnInit, Input, DoCheck, ViewChild, AfterViewInit } from '@angular/core';
import { FilterService } from './../../../services/filter.service'
import { SelectionMenuComponent } from './../../../home-screen/selectionmenu/selectionmenu.component'
import { IVehicle } from './../../../vehicle'

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

  filteredResources: Array<any>;
   filteredResources2:Array<any>;
   resources:Array<any>;
   selectedResource:IVehicle;
   width=10;
   height=10;
   f1;
   f2;

  color;

  constructor(private filterService:FilterService) {
    //this.doResize(null, this.starterData);
    this.filteredResources=[];
    this.filteredResources2=[];
   }

  ngOnInit() { 
    // this.filteredResources=this.filterService.getFilteredData();
    // this.filteredResources2=this.filterService.getFilteredData2();

   }
   ngAfterViewInit(){
    
   }
   ngDoCheck(){
     if(this.color=="status")
     {
       
     }
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
