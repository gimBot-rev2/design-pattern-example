import { MealBuilder, MealTemplate } from "../mealMaker"

export class PepperoniPizzaBuilder implements MealBuilder {
  private meal!: MealTemplate

  public getMeal = () => this.meal

  constructor () {
    this.meal = new MealTemplate()
  }

  public buildMeal = () => {
    this.meal.setMealName("Pepperoni Pizza")
    this.meal.setMealPrice(170)
    this.meal.setMealContents(["Spices", "Beef", "Ham", "Carrots"])
    this.meal.setMealCooktingTime(16)
  }
}