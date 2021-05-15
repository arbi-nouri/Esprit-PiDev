import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { Furniture } from '../common/furniture';
import {catchError, map} from 'rxjs/operators';
import { HttpClient,HttpErrorResponse, HttpHeaders  } from '@angular/common/http';
import {FurnitureType} from '../common/furniture-type.enum';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  private baseUrl = 'http://localhost:8081/DariFurniture/servlet/';
  private searchUrl = 'http://localhost:8081/DariFurniture/servlet/search-furniture/'
  private adFurnitureUrl = 'http://localhost:8081/DariFurniture/servlet/add-furniture/'
  private updateFurnitureUrl = 'http://localhost:8081/DariFurniture/servlet/modify-furniture/'
  private deleteFurnitureUrl = 'http://localhost:8081/DariFurniture/servlet/delete-furniture/'
  private showUserFurnitureurl  ='http://localhost:8081/DariFurniture/servlet/retrieve-furniture-user/'
  private searchTypeUrl = 'http://localhost:8081/DariFurniture/servlet/retrieve-furnitureType/'
  private detailsUrl = 'http://localhost:8081/DariFurniture/servlet/retrieve-furniture/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

 /* public getFurnitureList() : Observable<Furniture[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.furnitures)

    )
  }*/
  getAll(): Observable<Furniture[]> {
    return this.httpClient.get<Furniture[]>(this.baseUrl + 'furnitures')

  }
  getById(id : number) : Observable<Furniture>{
    return this.httpClient.get<Furniture>(this.detailsUrl + id)
  }

  getByUser(): Observable<Furniture[]> {
    return this.httpClient.get<Furniture[]>(this.showUserFurnitureurl + "1")

  }

  search(search : String) : Observable<Furniture[]>{
    return this.httpClient.get<Furniture[]>(this.searchUrl+ search)
  }

  searchByType(search : FurnitureType) : Observable<Furniture[]>{
    return this.httpClient.get<Furniture[]>(this.searchTypeUrl+ search)
  }

  add(furniture:Furniture) {
    return this.httpClient.post(this.adFurnitureUrl,JSON.stringify(furniture), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number){
    return this.httpClient.delete<Furniture>(this.deleteFurnitureUrl+id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update( furniture: Furniture): Observable<Furniture> {
    return this.httpClient.put<Furniture>(this.updateFurnitureUrl,JSON.stringify(furniture), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }



  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}

interface GetResponse{

  furnitures: Furniture[];

}
