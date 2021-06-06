import { User } from "./User"

export abstract class Observer {
  public update = () => {}
  public subject!: User
}
