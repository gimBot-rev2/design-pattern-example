import {
  CheesePizzaBuilder, NormalPizzaBuilder, PepperoniPizzaBuilder,
  SpecialPizzaBuilder, TunaPizzaBuilder
} from "./Recepies"
import { Kitchen, MealTemplate } from "./mealMaker"

export enum MealTypes {
  NORMAL = "Normal",
  CHEESE = "Chesse",
  PEPPERONI = "Pepperoni",
  SPECIAL = "Special",
  TUNA = "Tuna",
}

export const KitchenAction = (mealType: string): MealTemplate => {
  switch (mealType) {
    case MealTypes.NORMAL: {
      const NormalBuilder =  new NormalPizzaBuilder()
      const Chef = new Kitchen(NormalBuilder)
      Chef.cookMeal()
      const CookedMeal: MealTemplate = Chef.getMeal()
      console.log("Meal Cooked: " + CookedMeal.getMealName())
      return CookedMeal
      break
    }

    case MealTypes.CHEESE: {
      const CheeseBuilder =  new CheesePizzaBuilder()
      const Chef = new Kitchen(CheeseBuilder)
      Chef.cookMeal()
      const CookedMeal: MealTemplate = Chef.getMeal()
      console.log("Meal Cooked: " + CookedMeal.getMealName())
      return CookedMeal
      break
    }

    case MealTypes.PEPPERONI: {
      const PepperonuBuilder =  new PepperoniPizzaBuilder()
      const Chef = new Kitchen(PepperonuBuilder)
      Chef.cookMeal()
      const CookedMeal: MealTemplate = Chef.getMeal()
      console.log("Meal Cooked: " + CookedMeal.getMealName())
      return CookedMeal
      break
    }

    case MealTypes.TUNA: {
      const TunaBuilder =  new TunaPizzaBuilder()
      const Chef = new Kitchen(TunaBuilder)
      Chef.cookMeal()
      const CookedMeal: MealTemplate = Chef.getMeal()
      console.log("Meal Cooked: " + CookedMeal.getMealName())
      return CookedMeal
      break
    }

    case MealTypes.SPECIAL: {
      const SpecialBuilder =  new SpecialPizzaBuilder()
      const Chef = new Kitchen(SpecialBuilder)
      Chef.cookMeal()
      const CookedMeal: MealTemplate = Chef.getMeal()
      console.log("Meal Cooked: " + CookedMeal.getMealName())
      return CookedMeal
      break
    }

    default: return null as any
  }
}