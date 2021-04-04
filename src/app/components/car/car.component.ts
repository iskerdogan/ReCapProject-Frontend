import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  carDetails:CarDetail[]=[]
  constructor(private carService:CarService) {}

  ngOnInit(): void {
    this.getDetailCar();
  }

  getCar(){
    this.carService.getCar().subscribe(response=>{
      this.cars=response.data
    })
  }
  getDetailCar(){
    this.carService.getDetailCar().subscribe(response=>{
      this.carDetails=response.data
    })
  }
}
