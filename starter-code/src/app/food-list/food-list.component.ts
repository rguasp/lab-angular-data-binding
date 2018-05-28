import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  searchTerm: String = "";
  resultsArray: Array<any> = [];
  theFood: Array<any> = [];
  newFood: any = {
    name:"",
    calories:"",
    image:"",
    quantity:""
  };
  todaysFood: Array<any> = [];
  // theTotalCalories: number = totalColories;
  todaysCalories:number = 0;
  openform:boolean=false;
  constructor() { }

  ngOnInit() {
    this.theFood = foods;
    this.resultsArray = this.theFood;
  }

  addFood(){
    // const theNewFood = {
    //   name: this.newFood.name,
    //   calories:this.newFood.calories,
    //   image:this.newFood.image,
    //   quantity:this.newFood.quantity
    // }
    this.theFood.unshift(this.newFood);
    // this.newFood = {
    //   name:"",
    //   calories:"",
    //   image:"",
    //   quantity:""
    // }
    this.openform=false;
  }
  onClickOpenForm(){
    if(this.openform === false){
      this.openform=true;  
    } else if (this.openform === true)
      this.openform=false;
  }

  addTodaysFood(food){
    this.todaysFood.unshift(food);
    this.todaysCalories+= Number(food.calories);
  }

  filterFoods(){
    this.resultsArray = this.theFood.filter((food=>{
      return food.name.includes(this.searchTerm);
    }))
  }

}
