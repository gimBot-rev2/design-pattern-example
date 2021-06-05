import { MealBuilder, MealTemplate } from "../mealMaker"

export class CheesePizzaBuilder implements MealBuilder {
  private meal!: MealTemplate

  public getMeal = () => this.meal

  constructor () {
    this.meal = new MealTemplate()
  }

  public buildMeal = () => {
    this.meal.setMealName("Cheese Pizza")
    this.meal.setMealPrice(100)
    this.meal.setMealContents(["Cheese", "Beef", "Onions"])
    this.meal.setMealCooktingTime(20)
  }
}