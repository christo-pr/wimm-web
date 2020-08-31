import React, { useState } from "react"

import Money from "./Money"

function PaycheckForm(props) {
  const { label, amount, onChangeAmount } = props
  const [formView, setFormView] = useState(false)

  return (
    <div className="paycheck-amount uk-text-center uk-padding-small">
      <small>{label}</small>
      <h4 className="uk-margin-small">
        <Money amount={amount} />
      </h4>
      <div className="button-circle-icon">
        <span data-uk-icon="pencil"></span>
      </div>
    </div>
  )
}

export default PaycheckForm
