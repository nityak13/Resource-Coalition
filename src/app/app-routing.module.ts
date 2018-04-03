import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectionMenuComponent } from './home-screen/selectionmenu/selectionmenu.component';




const routes: Routes = [
    {path: '', component:SelectionMenuComponent
  // ,children:[
  // //   {path:'Select' , component:SelectComponent,},
  // //   {path: 'Map', component:TableComponent},
  // //   {path:'List',component:ListComponent}
  // // ]}
    }];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }