import ReadLine from "readline"
import { KitchenAction, MealTypes } from "./builder"
import { MealTemplate } from "./mealMaker"

const readLine = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('\
  \tWelcome to our pizza shop. Please order your favorite from the list below: \
  \n1. Normal Pizza \
  \n2. Cheese Pizza \
  \n3. Pepperoni Pizza \
  \n4. Special Pizza \
  \n5. Tuna Pizza \
  \n\n\
')

const resolveChoice = (numberChoice: string) => {
  return Object.values(MealTypes)[Number(numberChoice) - 1]
}

readLine.question("> ", input => MainCouse(input))

const MainCouse = (mealType: string) => {
  const preparedMeal: MealTemplate = KitchenAction(resolveChoice(mealType))
  console.log("Info", preparedMeal.getProps())
}