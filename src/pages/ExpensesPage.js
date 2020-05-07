import React from "react"

import { DateFilter, ExpenseItem, Money } from "../components/"
import { ExpensesContainer } from "../containers/"

function Expenses() {
  return (
    <ExpensesContainer>
      {({ expenses, totalExpense, loading, error }) => (
        <>
          <div className="uk-flex uk-flex-column uk-flex-center uk-background-default">
            <div data-uk-sticky className="sticky-add-button">
              <button className="uk-button uk-button-primary uk-width-expand">
                Agregar +
              </button>
            </div>
            <DateFilter />
          </div>
          <div
            data-uk-sticky="offset: 60"
            className="uk-tile uk-tile-default uk-padding-small uk-text-center"
          >
            <p className="uk-h4">
              <small>Total gastado:</small> <br />
              <Money amount={totalExpense} />
            </p>
          </div>
          <ul
            className="uk-list uk-list-divider"
            uk-scrollspy="target: > li; cls: uk-animation-fade; delay: 500"
          >
            {expenses.map((expense) => (
              <ExpenseItem key={expense.id} expense={expense} />
            ))}
          </ul>
        </>
      )}
    </ExpensesContainer>
  )
}

export default Expenses
