import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FurnitureType } from './common/furniture-type.enum';
import { FurnitureListComponent } from './components/furniture-list/furniture-list.component';
import { UpdateFurnitureComponent } from './components/update-furniture/update-furniture.component';
import { UserFurnitureComponent } from './components/user-furniture/user-furniture.component';
import {AddFurnitureComponent} from './components/add-furniture/add-furniture.component';


const routes: Routes = [
  {
    path : 'userfurniture' , component : UserFurnitureComponent
  },
  {
    path : 'furnitures' , component : FurnitureListComponent
  },
  {
    path : 'updatefurniture' , component : UpdateFurnitureComponent
  },
  {
    path : 'addfurniture' , component : AddFurnitureComponent
  },
  {
    path : '**' , component : FurnitureListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
