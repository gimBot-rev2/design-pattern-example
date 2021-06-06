import { OrderDiscountDecorator } from "./OrderDecorator"
import { OrderInterface } from "./OrderInterface"
import { MealPlan } from "../mealMaker"

export class OrderDiscount extends OrderDiscountDecorator {
  constructor(decoratedOrder: OrderInterface) {
    super(decoratedOrder)
  }

  calculatePrice = (meals: MealPlan[]) => {
    this.decoratedOrder.calculatePrice(meals)
    const PriceAfterVAT: number = (1 + this.orderDiscount) * this.decoratedOrder.getOrderPrice()
    const RoundedPrice = Number(PriceAfterVAT).toFixed(2) as unknown as number
    this.decoratedOrder.setOrderPrice(RoundedPrice)
    return RoundedPrice
  }

  orderDiscount: number = 0

  // Number should be less than 1 (0.35) not 35%
  setDiscount = (discountAmount: number) => {
    this.orderDiscount = discountAmount
  }
}