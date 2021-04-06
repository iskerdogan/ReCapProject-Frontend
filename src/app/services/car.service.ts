import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44368/api/';
  constructor(private httpClient: HttpClient) {}

  getCarDetails():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/cardetail"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetailsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetailsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarByCarId(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/cardetailsbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

}
