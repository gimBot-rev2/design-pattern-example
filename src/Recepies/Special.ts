import { MealBuilder, MealTemplate } from "../mealMaker"

export class SpecialPizzaBuilder implements MealBuilder {
  private meal!: MealTemplate

  public getMeal = () => this.meal

  constructor () {
    this.meal = new MealTemplate()
  }

  public buildMeal = () => {
    this.meal.setMealName("Special Pizza")
    this.meal.setMealPrice(180)
    this.meal.setMealContents(["Pork", "Beef", "Onions", "Carrots"])
    this.meal.setMealCooktingTime(16)
  }
}