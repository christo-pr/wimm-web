import React from "react"

import Category from "./ui/Category"

function ExpenseItem(props) {
  const { expense } = props

  return (
    <article className="uk-comment">
      <header
        className="uk-comment-header uk-grid-medium uk-flex-middle"
        data-uk-grid
      >
        <div className="uk-width-auto">
          <Category id={expense.category} />
        </div>
        <div className="uk-width-expand">
          <h4 className="uk-comment-title uk-margin-remove">
            <a className="uk-link-reset" href="#">
              Author
            </a>
          </h4>
          <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
            <li>
              <a href="#">12 days ago</a>
            </li>
            <li>
              <a href="#">{expense.id}</a>
            </li>
          </ul>
        </div>
      </header>
    </article>
  )
}

export default ExpenseItem
