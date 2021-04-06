import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  carImages: CarImage[] = [];
  rent: RentalDetail[] = [];
  currentCar: CarDetail;
  imageBasePath="https://localhost:44368"
  constructor(
    private carDetailService: CarDetailService,
    private activatedRoute: ActivatedRoute,
    private carImagesService:CarImageService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"])
      this.getCarDetailById(params['carId'])
      this.getCarImagesById(params["carId"])
    })
  }
  
  getCarDetailById(carId:number){
    this.carDetailService.getCarDetailById(carId).subscribe(response=>{
      this.carDetails=response.data
    })
  }

  getCarImagesById(carId:number){
    this.carImagesService.getCarImagesById(carId).subscribe(response=>{
      this.carImages=response.data
    })
  }
  
}
