"use strict"
/**
 * Utilities
 */

function randomDate(start = new Date(2020, 0, 1), end = new Date()) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

function addMonths(date, monthsToAdd) {
  const newDate = new Date(date)

  newDate.setMonth(date.getMonth() + monthsToAdd)

  return newDate
}

function formatDate(date) {
  const event = new Date(date)

  return event.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default {
  randomDate,
  formatDate,
  addMonths,
}
