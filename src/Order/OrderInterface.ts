import { MealPlan } from "../mealMaker"

export interface OrderInterface {
  calculatePrice: (meals: MealPlan[]) => number
  getOrderPrice: () => number
  setOrderPrice: (newOrderPrice: number) => void
}