import React from "react"

import { PaycheckAmount, PaycheckForm, PaycheckItem } from "../components"

export function PaycheckTrackerPage() {
  return (
    <>
      <div className="paycheck-amount uk-text-center uk-position-relative">
        <PaycheckAmount
          label="Total"
          amount={150}
          onChangeAmount={(amount) => {
            console.log("new total", amount)
          }}
        />
      </div>
      <hr className="uk-margin-small-bottom uk-margin-small-top" />
      <div className="uk-flex uk-flex-around uk-flex-middle uk-background-default">
        <div className="paycheck-amount uk-text-center uk-padding-small">
          <PaycheckAmount label="Libre" amount={150} editable={false} />
        </div>
        <div className="paycheck-amount uk-text-center uk-padding-small">
          <PaycheckAmount label="Deuda:" amount={150} editable={false} />
        </div>
      </div>
      <PaycheckForm />
      <dl
        className="uk-description-list uk-description-list-divider uk-margin-large-top"
        data-uk-scrollspy="target: > li; cls: uk-animation-fade; delay: 100"
      >
        {new Array(10).fill().map((_, i) => (
          <PaycheckItem key={i} />
        ))}
      </dl>
    </>
  )
}
