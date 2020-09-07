import React from "react"

import { DateFilter, ExpenseItem, ExpenseForm, Money } from "../components/"
import { ExpensesContainer } from "../containers/"

export function ExpensesPage() {
  return (
    <ExpensesContainer>
      {({ expenses, loading, error }) => (
        <>
          <div className="uk-flex uk-flex-column uk-flex-center uk-background-default">
            <ExpenseForm />
            <DateFilter />
          </div>
          <div
            data-uk-sticky
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
            data-uk-scrollspy="target: > li; cls: uk-animation-fade; delay: 500"
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
