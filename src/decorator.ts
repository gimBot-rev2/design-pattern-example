import { MealTemplate } from "./mealMaker";

interface OrderInterface {
  mealAmount: number
  mealContents: MealTemplate[]
  getMealAmount: () => number
  calculateTotalPrice: () => number
  readonly createdAt: string
}

class Order implements OrderInterface {
  mealAmount!: number
  createdAt!: string
  mealContents!: MealTemplate[]
  mealTotalPrice!: number

  constructor (mealAmount: number, mealContents: MealTemplate[]) {
    this.mealAmount = mealAmount
    this.createdAt = String(new Date())
    this.mealContents = mealContents
  }

  public getMealAmount = () => this.mealAmount

  public calculateTotalPrice = () => {
    let totalAmount = 0
    this.mealContents.forEach(meal => {
      totalAmount += meal.getMealPrice()
    })
    this.mealTotalPrice = totalAmount
    return totalAmount
  }
}

abstract class OrderDecorator implements OrderInterface {
  private orderMade !: OrderInterface
  createdAt!: string
  mealContents!: MealTemplate[]
  mealAmount!: number
  constructor (orderMade: OrderInterface) {
    this.orderMade = orderMade
  }

  public getMealAmount = () => this.mealAmount

  public calculateTotalPrice = () => {
    let totalAmount = 0
    this.mealContents.forEach(meal => {
      totalAmount += meal.getMealPrice()
    })
    return totalAmount
  }
}

class NoVATOrder extends OrderDecorator {
  private VATAmount!: number
  constructor(orderMade: OrderInterface) {
    super(orderMade)
    this.VATAmount = 0
  }
}

class VAT15Order extends OrderDecorator {
  private VATAmount!: number
  constructor(orderMade: OrderInterface) {
    super(orderMade)
    this.VATAmount = 15
  }
}

const createOrder = (meals: MealTemplate[]) => {
}