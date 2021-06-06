import { Observer } from "./Observer"

export class User {
  private observers: Observer[] = []
  private state!: number

  public getState = () => this.state

  public setState = (state: number) => {
    this.state = state
    this.notifyAllObservers()
  }

  public attach = (observer: Observer) => this.observers.push(observer)

  public notifyAllObservers = () => {
    this.observers.forEach(observer => observer.update())
  }
}