import { Printable } from "../interfaces/printable.js";

export function imprimir(...args: Printable[]) {
  for (const obj of args) {
    console.log(obj.toString());
  }
}
