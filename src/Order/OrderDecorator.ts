import { MealPlan } from "../mealMaker";
import { OrderInterface } from "./OrderInterface";

export abstract class OrderDiscountDecorator implements OrderInterface {
  protected decoratedOrder!: OrderInterface

  constructor (decoratedOrder: OrderInterface) {
    this.decoratedOrder = decoratedOrder
  }

  public calculatePrice = (meals: MealPlan[]) => this.decoratedOrder.calculatePrice(meals)

  public getOrderPrice = () => this.decoratedOrder.getOrderPrice()

  public setOrderPrice = (newPrice: number) => this.decoratedOrder.setOrderPrice(newPrice)
}