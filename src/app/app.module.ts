import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FurnitureListComponent } from './components/furniture-list/furniture-list.component';
import {HttpClientModule} from '@angular/common/http';
import { FurnitureService } from './services/furniture.service';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserFurnitureComponent } from './components/user-furniture/user-furniture.component';
import {MatDialog} from '@angular/material/dialog';
import { UpdateFurnitureComponent } from './components/update-furniture/update-furniture.component';
import { AddFurnitureComponent } from './components/add-furniture/add-furniture.component';
import { DetailsComponent } from './components/details/details.component';
import {ToastrModule} from 'ngx-toastr';
import {LayoutModule} from '@angular/cdk/layout';



@NgModule({
  declarations: [
    AppComponent,
    FurnitureListComponent,
    UserFurnitureComponent,
    UpdateFurnitureComponent,
    AddFurnitureComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    ToastrModule,
    ToastrModule.forRoot(),
    LayoutModule
  ],
  providers: [FurnitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
