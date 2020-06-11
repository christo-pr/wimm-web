"use strict"
/**
 * Api service for server calls
 */

const api = {
  expenses: {
    get() {
      return fetch("/api/expenses").then(res => res.json())
    }
  },
  payments: {
    get() {
      return fetch("/api/payments").then(res => res.json())
    }
  }
}

export default api
