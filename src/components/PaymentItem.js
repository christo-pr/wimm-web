import React from "react"

import Category from "./Category"
import utils from "../utils"

function PaymentItem(props) {
  const { payment } = props

  return (
    <article className="expense-item">
      <header className="uk-grid-medium uk-flex-start" data-uk-grid>
        <div className="uk-width-1-4">
          <Category id={payment.category} />
        </div>
        <div className="uk-width-expand">
          <h5 className="uk-comment-title uk-margin-remove">
            {payment.description}
          </h5>
        </div>
      </header>
      <ul className="uk-subnav uk-subnav-divider uk-margin-remove-top uk-flex uk-flex-around">
        <li>
          <p className="uk-margin-remove-bottom">
            {utils.formatDate(new Date(payment.date))}
          </p>
        </li>
        <li>
          <p className="uk-margin-remove-bottom">${payment.amount}</p>
        </li>
      </ul>
      <hr />
    </article>
  )
}

export default PaymentItem
