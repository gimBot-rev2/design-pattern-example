import { Observer } from "./Observer"
import { User } from "./User"

export class UserObserver extends Observer {
  constructor (subject: User, ) {
    super()
    this.subject = subject
    this.subject.attach(this)
  }

  update = () => {
    console.log("Your meal has arrived. Please take it and enjoy your meal")
  }
}