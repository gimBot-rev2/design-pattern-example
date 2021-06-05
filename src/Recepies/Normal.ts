import { MealBuilder, MealTemplate } from "../mealMaker"

export class NormalPizzaBuilder implements MealBuilder {
  private meal!: MealTemplate

  public getMeal = () => this.meal

  constructor () {
    this.meal = new MealTemplate()
  }

  public buildMeal = () => {
    this.meal.setMealName("Normal Pizza")
    this.meal.setMealPrice(120)
    this.meal.setMealContents(["Sauss", "Beef", "Onions"])
    this.meal.setMealCooktingTime(40)
  }
}