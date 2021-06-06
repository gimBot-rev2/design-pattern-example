import { OrderInterface } from "./OrderInterface"
import { DefaultOrder } from "./OrderVariants"
import { OrderDiscount } from "./OrderDiscounts"
import { KitchenAction, MealTypes } from "../builder"

const DemoRun = () => {
  const noVATOrder: OrderInterface = new DefaultOrder()
  const VAT15Order = new OrderDiscount(new DefaultOrder())

  const meals = Array(Object.values(MealTypes).length)
    .fill(0).map((_, idx) => KitchenAction(Object.values(MealTypes)[idx]))
  meals.forEach(order => {
    console.log("\nOrder Price: ", order.getMealPrice())
  })

  noVATOrder.calculatePrice(meals)
  console.log("\n\nOrder Price: ", noVATOrder.getOrderPrice())

  VAT15Order.setDiscount(0.15)
  VAT15Order.calculatePrice(meals)

  console.log("\n\nWith VAT Order Price: ", VAT15Order.getOrderPrice())
}