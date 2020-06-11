import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  i = 0;

  cars = [
    {
      marque: "Peugeot 208",
      n_immatriculation: "208  Rinto",
      n_sieges: "4",
      couleur: "Yellow",
      image: "https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg",
    },
    {
      marque: "Peugeot 208",
      n_immatriculation: "208  Rinto",
      n_sieges: "4",
      couleur: "Yellow",
      image: "https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg",
    },
    {
      marque: "Peugeot 208",
      n_immatriculation: "208  Rinto",
      n_sieges: "4",
      couleur: "Yellow",
      image: "https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg",
    },
    {
      marque: "Peugeot 208",
      n_immatriculation: "208  Rinto",
      n_sieges: "4",
      couleur: "Yellow",
      image: "https://www.automobile-magazine.fr/asset/cms/800x449/167149/config/115964/peugeot-208.jpg",
    }
    
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }

  goToCarsDetail(car){

    let ca = 
    {
      marque: "",
      n_immatriculation: "",
      n_sieges: "",
      couleur: "",
      image: ""
    };

    ca = car; 

    let i:number = 0;
    let check:Boolean = true;
  
    
    do{

      if(this.cars[i].n_immatriculation === car.n_immatriculation){
        ca = this.cars[i];
        check = false;
      }

        
      i++;
    }while(check && i <= this.cars.length)
    
    this.router.navigate(["CarDetails", JSON.stringify(ca)]);

  }

}
