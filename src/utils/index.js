"use strict"
/**
 * Utilities
 */

function randomDate(start = new Date(2020, 0, 1), end = new Date()) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

function formatDate(date) {
  const event = new Date(date)

  return event.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
}

export default {
  randomDate,
  formatDate
}
