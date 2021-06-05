interface MealPlan {
  setMealName: (mealName: string) => string
  setMealPrice: (mealPrice: number) => number
  setMealContents: (mealContents: string[]) => string[]
  setMealCooktingTime: (cookingTime: number) => number
}

export class MealTemplate implements MealPlan {
  private mealName!: string
  private mealPrice!: number
  private mealContents!: string[]
  private cookingTime!: number

  public setMealName = (mealName: string) => this.mealName = mealName
  public setMealPrice = (mealPrice: number) => this.mealPrice = mealPrice
  public setMealContents = (mealContents: string[]) => this.mealContents = mealContents
  public setMealCooktingTime = (cookingTime: number) => this.cookingTime = cookingTime

  public getMealName = () => this.mealName
  public getMealPrice = () => this.mealPrice
  
  public getProps = () => ({
    mealName: this.mealName,
    mealPrice: this.mealPrice,
    mealContents: this.mealContents,
    cookingTime: this.cookingTime
  })
}

export interface MealBuilder {
  buildMeal: () => void
  getMeal: () => MealTemplate
}

export class Kitchen {
  private mealBuilder!: MealBuilder

  constructor (mealBuilder: MealBuilder) {
    this.mealBuilder = mealBuilder
  }

  public getMeal = (): MealTemplate => this.mealBuilder.getMeal()

  public cookMeal = () => {
    this.mealBuilder.buildMeal()
  }
}