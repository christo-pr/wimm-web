"use strict"
/**
 * Api service for server calls
 */

const api = {
  getExpenses() {
    return fetch("/api/expenses").then(res => res.json())
  },

  getPayments() {
    return fetch("/api/payments").then(res => res.json())
  }
}

export default api
