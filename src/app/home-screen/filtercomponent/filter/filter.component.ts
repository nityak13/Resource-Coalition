//component for calling filter service and filtering the resources
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SelectionMenuComponent } from './../../selectionmenu/selectionmenu.component';
import { VehicleService } from './../../../services/vehicle.service'
import { FilterService } from './../../../services/filter.service'
import { IsolistService } from './../../../services/isoList.service'


@Component({
  selector: 'filter-component',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  
})
export class FilterComponent implements OnInit,AfterViewInit {

  isoList=[]; // populated using isolist service
  resources: Array<any>;
  errorMessage: String;
  //2-way databinding var between template and logic
  selected: String;
  //flags for re-filtering by either condition
  flagIso=false;
  flagStatus=false;  
  //var for storing values selected from drop-down list
  isoValue: String;
  statusValue: String;
  //var for res by TSO
  filteredResources: Array<any>; 
  // var for res by Status
  filteredResources2:Array<any>; 
  
  @Input() statusList=["GI","SLP","IA","NC"]; // two way binding between selectionmenu and filter comp
  constructor(private vehicleService:VehicleService,private filterService:FilterService,
    private isolistService: IsolistService) { 
    this.isoList=[];
    this.resources = [];
    this.filteredResources = [];
  }



  ngOnInit() {
    // subscribes to vehicle service to get the list of resources
   this.vehicleService.getIVS()
        .subscribe(resources => {
          this.resources = resources;
       JSON.stringify(this.resources);
       console.log(this.resources);
       
        },
        error => this.errorMessage = <any>error);
        this.isolistService.getISO()
      .subscribe(isoList => {
        this.isoList = isoList;
        },
  error => this.errorMessage = <any>error); 
  }

  ngAfterViewInit(){
    this.selected;
    
  }

  clearSelection(){
    this.filteredResources=[];
    this.filteredResources2=[];
    this.filterService.setFilteredData(this.filteredResources);
    this.filterService.setFilteredData2(this.filteredResources2);
    this.filterService.getFilteredData();
    this.filterService.getFilteredData2();

  }

// main function for filtering, calls filterservice for maintaining uniformity across components
filterResource(val) {
  
  
  if(val=="AllTSO"){
      this.flagIso=true;
      this.isoValue="AllTSO";
    this.filteredResources= this.resources;
    return this.filterService.setFilteredData(this.filteredResources);}
  
  
  else{
  for(let iso of this.isoList)
    {
      if(String(val) == iso)
      {
        if(this.flagStatus==true)
          {
          this.filteredResources2 = this.resources
          .filter( resource => resource.iso_id === val )
          .filter( resource => resource.primary_status === this.statusValue)
         this.filterService.setFilteredData2(this.filteredResources2);
          return this.filterService.getFilteredData2();
          }
      else 
        {
        this.flagIso=true;
        this.isoValue=val;
        this.filteredResources = this.resources
        .filter( resource => resource.iso_id === val);
        console.log(this.filteredResources);
        return this.filterService.setFilteredData(this.filteredResources);
        
        
        }
      }
    }  
    for(let status of this.statusList)
    {
      if(String(val)== status)
        {
          if(this.flagIso==true)
        {
          if(this.isoValue=="AllTSO"){
           
              this.filteredResources=this.resources
              .filter(resource => resource.primary_status === val)
             this.filterService.setFilteredData(this.filteredResources);
             
              return this.filterService.getFilteredData();
          }
          else { 
          this.filteredResources = this.resources
          .filter( resource => resource.primary_status === val)
          .filter( resource => resource.iso_id === this.isoValue)
          this.filterService.setFilteredData(this.filteredResources);
          return this.filterService.getFilteredData()
        }
      }
      else
        {
          this.flagStatus=true;
          this.statusValue=val;
          this.filteredResources2 = this.resources
          .filter ( resource => resource.primary_status === val)
        return this.filterService.setFilteredData2(this.filteredResources2);

        }
      }
      }
    }
}




}