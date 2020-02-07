// Expense factory
const expenseFactory = {
  description(id) {
    return `Gasto ${id}`
  },

  category() {
    const categories = ["food", "car", "store", "house", "other"]
    const randomIndex = Math.floor(Math.random() * categories.length)

    return categories[randomIndex]
  },

  amount() {
    let min = 10
    let max = 800

    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  date() {
    return new Date()
  }
}

export default {
  expenseFactory
}
