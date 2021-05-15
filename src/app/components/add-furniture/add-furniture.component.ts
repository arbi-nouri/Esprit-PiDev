import { Component, OnInit } from '@angular/core';
import {FurnitureService} from '../../services/furniture.service';
import {Furniture} from '../../common/furniture';
import {User} from '../../common/user';
import {FurnitureState} from '../../common/furniture-state.enum';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-furniture',
  templateUrl: './add-furniture.component.html',
  styleUrls: ['./add-furniture.component.css']
})
export class AddFurnitureComponent implements OnInit {

  furniture: Furniture;
  user : User;
  constructor(private furnitureservice:FurnitureService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.furniture = new Furniture();
    this.user = new User();
    this.user.id= 1;
    this.furniture.user = this.user;
    this.furniture.state = FurnitureState.Active;
  }

  addFurniture(){
    console.log(this.furniture);
    this.furnitureservice.add(this.furniture).subscribe(
      data => this.toastr.success("Your furniture has been added")
    );

  }
}
