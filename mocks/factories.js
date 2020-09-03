import { Factory } from "miragejs"

import utils from "../src/utils/"

// Expense factory
const expenseFactory = {
  description(id) {
    return `Gasto ${id}`
  },

  category() {
    const categories = [
      "cart",
      "home",
      "credit-card",
      "receiver",
      "world",
      "bolt",
      "question"
    ]
    const randomIndex = Math.floor(Math.random() * categories.length)

    return categories[randomIndex]
  },

  amount() {
    let min = 10
    let max = 800

    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  date() {
    return utils.randomDate()
  }
}

const PaymentFactory = {
  description(id) {
    return `pago ${id}`
  },

  category() {
    const categories = [
      "credit-card",
      "invoice"
    ]
    const randomIndex = Math.floor(Math.random() * categories.length)

    return categories[randomIndex]
  },
  amount() {
    let min = 1000
    let max = 10000

    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  date() {
    return utils.randomDate()
  }

}

export default {
  expense: Factory.extend(expenseFactory),
  payment: Factory.extend(PaymentFactory)
}
