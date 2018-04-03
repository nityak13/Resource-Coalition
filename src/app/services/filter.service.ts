import { Injectable } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { IVehicle } from './../vehicle';


@Injectable()
export class FilterService {

  resources: Array<any>;
  errorMessage: String;
  resourcesToShow: Array<any>;
  filteredResources: Array<IVehicle>;
  filteredResources2: Array<IVehicle>;

  constructor(private vehicleservice: VehicleService) { 
    this.resources = [];
    this.resourcesToShow = [];
    
  }

  getFilteredData(){
    return this.filteredResources;
  }
 
  setFilteredData(data:Array<IVehicle>){
    this.filteredResources= data;
    console.log(this.filteredResources);
  }
  
  getFilteredData2(){
    return this.filteredResources2;
  }
 
  setFilteredData2(data:Array<IVehicle>){
    this.filteredResources2= data;
  }
}

