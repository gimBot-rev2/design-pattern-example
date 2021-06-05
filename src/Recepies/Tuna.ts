import { MealBuilder, MealTemplate } from "../mealMaker"

export class TunaPizzaBuilder implements MealBuilder {
  private meal!: MealTemplate

  public getMeal = () => this.meal

  constructor () {
    this.meal = new MealTemplate()
  }

  public buildMeal = () => {
    this.meal.setMealName("Tuna Pizza")
    this.meal.setMealPrice(150)
    this.meal.setMealContents(["Tuna", "Beef", "Onions"])
    this.meal.setMealCooktingTime(10)
  }
}