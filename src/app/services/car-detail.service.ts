import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl = 'https://localhost:44368/api/';
  constructor(private httpClient:HttpClient) { }

  getCarDetailById(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"Cars/cardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}
