import React from "react"

import { PaycheckAmount, PaycheckForm, PaycheckItem } from "../components"

function PaycheckTrackerPage() {
  return (
    <>
      <div className="uk-flex uk-flex-around uk-flex-middle uk-background-default">
        <div className="paycheck-amount uk-text-center uk-padding-small">
          <PaycheckAmount
            label="Mensual"
            amount={150}
            onChangeAmount={(amount) => {
              console.log("new ahorro", amount)
            }}
          />
        </div>
        <div className="paycheck-amount uk-text-center uk-padding-small">
          <PaycheckAmount label="Quincenal:" amount={150} editable={false} />
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

export default PaycheckTrackerPage
