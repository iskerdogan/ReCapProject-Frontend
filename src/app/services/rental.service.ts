import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from '../models/rentalDetailResponseModel';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44368/api/rentals/getall';
  apiUrlDetail='https://localhost:44368/api/rentals/rentaldetail'
  constructor(private httpClient:HttpClient) {}

  getRental():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl)
  }
   
  getRentalDetail():Observable<RentalDetailResponseModel>{
    return this.httpClient.get<RentalDetailResponseModel>(this.apiUrlDetail)
  }
}
