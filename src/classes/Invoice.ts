import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  //  method 1:
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  //   constructor(c: string, d: string, a: number) {
  //     this.client = c;
  //     this.details = d;
  //     this.amount = a;
  //   }

  //Alternatively, method 2: include the public| private | readonly for below method to work

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format = () => {
    return `${this.client} owes €${this.amount} for ${this.details}`;
  };
}
