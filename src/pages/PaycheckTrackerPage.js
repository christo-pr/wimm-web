import React from "react"

import { PaycheckForm } from "../components"

function PaycheckTrackerPage() {
  return (
    <div className="uk-flex uk-flex-around uk-flex-middle uk-background-default">
      <div className="paycheck-amount uk-text-center uk-padding-small">
        <PaycheckForm
          label="Total Mes:"
          amount={150}
          onChangeAmount={(amount) => {
            console.log("new ahorro", amount)
          }}
        />
      </div>
      <div className="paycheck-amount uk-text-center uk-padding-small">
        <PaycheckForm label="Total Ahorro:" amount={150} editable={false} />
      </div>
    </div>
  )
}

export default PaycheckTrackerPage
