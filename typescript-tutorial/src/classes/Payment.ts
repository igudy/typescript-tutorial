import { HasFormatter } from "../interfaces/Hasformatter"

// lesson 12 - classes
// All classes are public by defualt. its the default behaivour
export class Payment implements HasFormatter {
  //   client: string

  // lesson 13 - Public, private and readonly
  // you can't access private outside of the class
  // readonly, you can read inside and outside the class but we can't change it. You can't change it inside the class

  //   private details: string
  //   public amount: number

  //   constructor(c: string, d: string, a: number) {
  //     this.client = c
  //     this.details = d
  //     this.amount = a
  //   }

  // lesson 14 - Invoice
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} owes N${this.amount} for ${this.details}`
  }
}
