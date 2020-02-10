import React, { useEffect, useState } from "react"

import api from "../utils/api"

import { DateFilter } from "../components/"

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
      <div
        className="uk-flex uk-flex-column uk-flex-center uk-background-default uk-padding-small uk-padding-remove-horizontal"
        data-uk-sticky
      >
        <button className="uk-button uk-button-primary">Agregar + </button>
        <DateFilter />
      </div>
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
