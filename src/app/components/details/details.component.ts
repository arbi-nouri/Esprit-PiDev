import {Component, Input, OnInit} from '@angular/core';
import {Furniture} from '../../common/furniture';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() furniture: Furniture;
  constructor() { }

  ngOnInit(): void {
    this.furniture = new Furniture();
    console.log(this.furniture);
  }



}
