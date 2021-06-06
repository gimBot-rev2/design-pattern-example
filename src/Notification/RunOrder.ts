
import { UserObserver } from "./UserObserver"
import { User } from "./User"

export enum DeliveryStatus {
  DELIVERED = 1,
  NOT_DELIVERED = 0
}

export const RunOrder = async (deliveryStatus: DeliveryStatus) => {
  const subject: User = new User()

  new UserObserver(subject)

  console.log("\n\nPayment Confirmed :)")
  setTimeout(() => {
    console.log("Order has arrived")
    subject.setState(deliveryStatus)
  }, 1000)
}