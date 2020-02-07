import { Server, Model, Factory } from "miragejs"

import { expenseFactory } from "./factories"

function init() {
  new Server({
    models: {
      expense: Model
    },

    factories: {
      expense: Factory.extend(expenseFactory)
    },

    routes() {
      this.namespace = "api"

      // Expenses
      this.get("/expenses")
    },

    seeds(server) {
      // 10 expenses
      server.createList("expense", 10)

      // seed the in-memory database
      server.db.dump()
    }
  })
}

export default { init }
