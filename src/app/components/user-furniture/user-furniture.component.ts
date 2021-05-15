import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FurnitureService } from 'src/app/services/furniture.service';
import { Furniture } from 'src/app/common/furniture';
import {FurnitureState} from '../../common/furniture-state.enum';
import {User} from '../../common/user';

@Component({
  selector: 'app-user-furniture',
  templateUrl: './user-furniture.component.html',
  styleUrls: ['./user-furniture.component.css']
})
export class UserFurnitureComponent implements OnInit {

  furniture: Furniture;
  furnitures : Furniture[];
  user: User;


  constructor(private furnitureservice: FurnitureService) { }

  ngOnInit(): void {
    this.furniture = new Furniture();
    this.furnitureservice.getByUser().subscribe(data =>{ this.furnitures = data;
    console.log(this.furnitures)});

  }


 /* openDialog() {
    const dialogRef = this.dialog.open(AddFurnitureComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }*/

  deleteFurniture(furniture : Furniture){
    this.furnitureservice.delete(furniture.id).subscribe();
  }

  update(furnitureClicked:Furniture){
    this.furniture = furnitureClicked;
    console.log(furnitureClicked);
  }

  updateFurniture(){
    this.user = new User();
    this.user.id= 1;
    this.furniture.user = this.user;
    this.furnitureservice.update(this.furniture).subscribe(data => {this.furniture = data;
      console.log(this.furniture)});
  }

}
