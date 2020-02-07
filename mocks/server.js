import { Server, Model } from "miragejs"

import factories from "./factories"

function init() {
  new Server({
    models: {
      expense: Model
    },

    factories: factories,

    routes() {
      this.namespace = "api"

      // Expenses
      this.get("/expenses")
    },

    seeds(server) {
      // 10 expenses
      server.createList("expense", 20)

      // seed the in-memory database
      server.db.dump()
    }
  })
}

export default { init }
