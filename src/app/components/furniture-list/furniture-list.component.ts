import { Component, OnInit } from '@angular/core';
import { Furniture } from 'src/app/common/furniture';
import { FurnitureService } from 'src/app/services/furniture.service';
import {FurnitureType} from '../../common/furniture-type.enum';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})
export class FurnitureListComponent implements OnInit {
  clicked : Furniture;
  search : string;
  searchtype: FurnitureType  ;
  furnitures: Furniture[];
  constructor(private furnitureService:FurnitureService ) { }

  ngOnInit(): void {
    this.furnitureList();
    this.search;
    this.searchtype;
    this.clicked;
  }

  furnitureList(){
    this.furnitureService.getAll().subscribe(
      data => {
        this.furnitures = data;
        console.log(this.furnitures);
      })
  }

  searchFurniture(){

      this.furnitureService.search(this.search).subscribe(
        data => {this.furnitures = data;
          console.log(this.furnitures);
        })


  }

  searchFurnitureByType(){
    console.log(this.searchtype);
    this.furnitureService.searchByType(this.searchtype).subscribe(
      data => {this.furnitures = data;
        console.log(this.furnitures);
      })

  }
  getDetail(furniture : Furniture){
    this.clicked = furniture;
  }

}
