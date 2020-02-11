import React, { useEffect, useState } from "react"

import api from "../utils/api"

import { DateFilter, ExpenseItem } from "../components/"

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
      <div className="uk-flex uk-flex-column uk-flex-center uk-background-default">
        <div data-uk-sticky className="sticky-add-button">
          <button className="uk-button uk-button-primary uk-width-expand">
            Agregar +{" "}
          </button>
        </div>
        <DateFilter />
      </div>
      <ul
        className="uk-list uk-list-divider"
        uk-scrollspy="target: > li; cls: uk-animation-fade; delay: 500"
      >
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </ul>
    </>
  )
}

export default Expenses
