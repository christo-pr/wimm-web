import React, { useEffect, useState } from "react"

import api from "../utils/api"

function Expenses() {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    api.getExpenses().then(res => {
      setExpenses(res.expenses)
      console.log(res.expenses)
    })
  }, [])

  return (
    <>
      <h2>Expenses</h2>
      <hr />
      <ul className="uk-list uk-list-divider">
        {expenses.map(expense => (
          <li key={expense.id}>{expense.id}</li>
        ))}
      </ul>
    </>
  )
}

export default Expenses
