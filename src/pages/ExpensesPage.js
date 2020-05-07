import React from "react"

import { DateFilter, ExpenseItem, ExpenseForm, Money } from "../components/"
import { ExpensesContainer } from "../containers/"

function Expenses() {
  return (
    <ExpensesContainer>
      {({ expenses, loading, error }) => (
        <>
          <ExpenseForm />
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
            className="uk-tile uk-tile-default uk-padding-small uk-text-center expenses-total"
          >
            <p className="uk-h4">
              <small>Total gastado:</small> <br />
              <Money amount={expenses.reduce((acc, v) => acc + v.amount, 0)} />
            </p>
          </div>
          <hr className="uk-divider-small uk-text-center"></hr>
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
