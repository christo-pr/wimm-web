import React from "react"

import Category from "./ui/Category"
import utils from "../utils"

function ExpenseItem(props) {
  const { expense } = props

  return (
    <article className="expense-item">
      <header className="uk-grid-medium uk-flex-start" data-uk-grid>
        <div className="uk-width-1-4">
          <Category id={expense.category} />
        </div>
        <div className="uk-width-expand">
          <h5 className="uk-comment-title uk-margin-remove">
            {expense.description}
          </h5>
        </div>
      </header>
      <ul className="uk-subnav uk-subnav-divider uk-margin-remove-top uk-flex uk-flex-around">
        <li>
          <p className="uk-margin-remove-bottom">
            {utils.formatDate(new Date(expense.date))}
          </p>
        </li>
        <li>
          <p className="uk-margin-remove-bottom">${expense.amount}</p>
        </li>
      </ul>
      <hr />
    </article>
  )
}

export default ExpenseItem
