import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[]
  currentCar:Car;
  dataLoaded=false;

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarDetailsByBrandId(params['brandId']);
      } else if (params['colorId']) {
        this.getCarDetailsByColorId(params['colorId']);
      } else {
        this.getCarDetails();
      }
    });
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response=>{
      this.cars=response.data
      this.dataLoaded=true;
    })

  }

  getCarDetailsByBrandId(brandId: number) {
   this.carService.getCarDetailsByBrandId(brandId).subscribe(response=>{
     this.cars=response.data
   })
  }

  getCarDetailsByColorId(colorId: number) {
    this.carService.getCarDetailsByColorId(colorId).subscribe(response=>{
      this.cars=response.data
    })
   }

  setCurrentCar(car:Car){
    this.currentCar=car;
  }

  getCurrentCarClass(car:CarDetail){
    if(car == this.currentCar){
      return "list-group-item  list-group-item-warning"
    }else{
      return "list-group-item"
    }
  }

  getAllCarsClass(){
    if(!this.currentCar){
      return "list-group-item list-group-item-warning"
    }else{
      return "list-group-item"
    }
  }

  
}