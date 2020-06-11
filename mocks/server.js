import { Server, Model } from "miragejs"

import factories from "./factories"

function init() {
  new Server({
    models: {
      expense: Model,
      payment: Model
    },

    factories: factories,

    routes() {
      this.namespace = "api"

      // GET Expenses
      this.get("/expenses")
      // Payments
      this.get("/payments")

      // POST Expenses
      this.post("/expenses")
    },

    seeds(server) {
      // 10 expenses
      server.createList("expense", 20)

      // payments
      server.createList("payment", 20)

      // seed the in-memory database
      server.db.dump()
    },
  })
}

export default { init }
