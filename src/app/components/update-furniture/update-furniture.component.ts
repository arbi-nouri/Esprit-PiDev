import { Component, Input, OnInit } from '@angular/core';
import { Furniture } from 'src/app/common/furniture';
import { FurnitureService } from 'src/app/services/furniture.service';
import {User} from '../../common/user';

@Component({
  selector: 'app-update-furniture',
  templateUrl: './update-furniture.component.html',
  styleUrls: ['./update-furniture.component.css']
})
export class UpdateFurnitureComponent implements OnInit {

  @Input() furnitureInput = new Furniture();
  constructor(private furnitureservice: FurnitureService) { }

  ngOnInit(): void {
    this.furnitureInput;
    console.log(this.furnitureInput);

  }

updateFurniture(){
  this.furnitureservice.update(this.furnitureInput).subscribe(data => this.furnitureInput = data);
}

}
