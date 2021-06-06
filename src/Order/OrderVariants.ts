import { OrderInterface } from "./OrderInterface";
import { MealPlan } from "../mealMaker"

export class DefaultOrder implements OrderInterface {
  totalPrice!: number

  calculatePrice = (meals: MealPlan[]) => {
    let thisPrice: number = 0
    meals.forEach(meal => thisPrice += meal.getMealPrice())
    this.totalPrice = thisPrice
    return thisPrice
  }

  getOrderPrice = () => this.totalPrice

  setOrderPrice = (newOrderPrice: number) => this.totalPrice = newOrderPrice
}