import ReadLine from "readline"
import { KitchenAction, MealTypes } from "./builder"
import { MealPlan, MealTemplate } from "./mealMaker"
import { OrderDiscount } from "./Order/OrderDiscounts"
import { DefaultOrder } from "./Order/OrderVariants"
import { RunOrder, DeliveryStatus } from "./Notification/RunOrder"

const readLine = ReadLine.createInterface({
  input: process.stdin,
  output: process.stdout
})

let totalOrders: string[] = []

const StartDialogue = () => {
  let i = 0;
  readLine.question('\
    \nWelcome to our pizza shop.\
    \n\nHow many order do you want?\n>',
    (answer1) => {
      let j = 1
      DisplayMeny()
      readLine.on('line', (answer2) => {
        totalOrders.push(answer2)
        i++;
        if (i >= Number(answer1)) {
          readLine.close()
          CreateOrder()
        } else {
          console.log(`Order #${++j}`)
        }
      })
    })
}

const generateOrderPrice = (meals: MealPlan[]) => {
  const VAT15Order = new OrderDiscount(new DefaultOrder())
  VAT15Order.calculatePrice(meals)
  // Happy Hour
  if (new Date().getHours() > 18 && new Date().getHours() < 23) {
    console.log("Price without VAT: ", VAT15Order.getOrderPrice())
    VAT15Order.setDiscount(0.15)
    VAT15Order.calculatePrice(meals)
    // Discount for happy hour
    VAT15Order.setDiscount(0.10)
    VAT15Order.calculatePrice(meals)
    console.log("Your happy hour total price is: ", VAT15Order.getOrderPrice())
  } else {
    console.log("Price without VAT: ", VAT15Order.getOrderPrice())
    VAT15Order.setDiscount(0.15)
    VAT15Order.calculatePrice(meals)
    console.log("\n\Total Order Price: ", VAT15Order.getOrderPrice())
  }
  return VAT15Order.getOrderPrice()
}

const CreateOrder = () => {
  console.log(`\n\nWe have ${totalOrders.length} orders.`)
  const meals = Array(totalOrders.length).fill(0).map((_, idx) => {
    return KitchenAction(resolveChoice(totalOrders[idx]))
  })
  generateOrderPrice(meals)
  RunOrder(DeliveryStatus.DELIVERED)
}

const DisplayMeny = () => {
  console.log('\n\n\
  \tPlease order your favorite from the list below: \
  \n1. Normal Pizza \
  \n2. Cheese Pizza \
  \n3. Pepperoni Pizza \
  \n4. Special Pizza \
  \n5. Tuna Pizza \
  \n\n\
')
}

export const resolveChoice = (numberChoice: string) => {
  return Object.values(MealTypes)[Number(numberChoice) - 1]
}

StartDialogue()

const MainCouse = (mealType: string) => {
  const preparedMeal: MealTemplate = KitchenAction(resolveChoice(mealType))
  console.log("Info", preparedMeal.getProps())
}