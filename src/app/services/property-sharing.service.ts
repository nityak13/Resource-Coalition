import { Injectable } from '@angular/core';

@Injectable()
export class PropertySharingService {

  selected:String;
  selectedView:String;
  selectedColor:String;
  constructor() { }

  getSelected(){
    return this.selected
  }

  setSelected(val:String){
    this.selected=val;
  }

  getView(){
    return this.selectedView;
  }

  setView(val:String){
    this.selectedView=val;
  }

  getColor(){
    return this.selectedColor;
  }

  setColor(val:String){
    this.selectedColor=val;
  }

}
