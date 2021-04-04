import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailsResponseModel';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44368/api/cars/getall';
  apiUrlDetail='https://localhost:44368/api/cars/cardetail'
  constructor(private httpClient:HttpClient) {}

  getCar():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl)
  }
  
  getDetailCar():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrlDetail)
  }
}
