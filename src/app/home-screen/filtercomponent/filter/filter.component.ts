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

  isoList=[];
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
  allResources:Array<any>;
  @Input() statusList=["GI","SLP","IA","NC"];
  constructor(private vehicleService:VehicleService,private filterService:FilterService,
    private isolistService: IsolistService) { 
    this.isoList=[];
    this.resources = [];
    this.filteredResources = [];
  }



  ngOnInit() {
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

filterAllResources(val){

  if(val=="AllTSO"){
    this.allResources=this.resources; 
    this.filterService.setFilteredData(this.allResources);
          return this.filterService.getFilteredData()
         
          
  }
  else if(val=="AllStatus"){
    this.allResources=this.resources;
    this.filterService.setFilteredData2(this.allResources);
    return  this.filterService.getFilteredData2();
  }
}
filterResource(val) {
  
  
  if(val=="AllTSO" || val=="AllStatus"){
    this.filterService.setFilteredData(this.resources);
    return this.filterService.getFilteredData();
  }
  
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
          this.filteredResources = this.resources
          .filter( resource => resource.primary_status === val)
          .filter( resource => resource.iso_id === this.isoValue)
          this.filterService.setFilteredData(this.filteredResources);
          // if(this.filterService.getFilteredData()==[])
          // alert("No data obtained");
          // else
          return this.filterService.getFilteredData()
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

//method stub for filtering by market
// filterByMarket(val){ }


}