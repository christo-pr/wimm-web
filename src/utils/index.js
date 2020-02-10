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
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()

  return day + " / " + months[monthIndex] + " / " + year
}

export default {
  randomDate,
  formatDate
}
