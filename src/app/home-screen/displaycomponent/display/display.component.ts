import { Component, OnInit } from '@angular/core';
import { FilterService } from './../../../services/filter.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  filteredResources: Array<any>;
  filteredResources2:Array<any>;

  constructor(private filterService:FilterService) { }

  ngOnInit() { }

  
 

  

}
