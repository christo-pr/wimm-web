import React from "react"

import { DateFilter, ExpenseItem } from "../components/"
import { ExpensesContainer } from "../containers/"

function Expenses() {
  return (
    <ExpensesContainer>
      {({ expenses, loading, error }) => (
        <>
          <div className="uk-flex uk-flex-column uk-flex-center uk-background-default">
            <div data-uk-sticky className="sticky-add-button">
              <button className="uk-button uk-button-primary uk-width-expand">
                Agregar +
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
      )}
    </ExpensesContainer>
  )
}

export default Expenses
