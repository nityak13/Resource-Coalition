import { Component, OnInit, Input } from '@angular/core';
import { SelectionMenuComponent } from './../../selectionmenu/selectionmenu.component';
import { VehicleService } from './../../../services/vehicle.service'
import { FilterService } from './../../../services/filter.service'

@Component({
  selector: 'filter-component',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  
})
export class FilterComponent implements OnInit {

  @Input() isoList=[];
  resources: Array<any>;
  errorMessage: String;
  @Input() selected: String;
  flagIso=false;
  flagStatus=false;  
  isoValue: String;
  statusValue: String;
  filteredResources: Array<any>;
  filteredResources2:Array<any>;
  @Input() statusList=[];
  constructor(private vehicleService:VehicleService,private filterService:FilterService) { 
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
  }


filterResource(val) {
  console.log("triggered from parent");
  console.log(val);
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
          return this.filterService.getFilteredData();
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
// filterByMarket(val){

// }


