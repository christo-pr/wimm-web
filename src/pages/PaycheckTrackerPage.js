import React from "react"

import { PaycheckAmount } from "../components"

function PaycheckTrackerPage() {
  return (
    <>
      <div className="uk-flex uk-flex-around uk-flex-middle uk-background-default">
        <div className="paycheck-amount uk-text-center uk-padding-small">
          <PaycheckAmount
            label="Total Mes:"
            amount={150}
            onChangeAmount={(amount) => {
              console.log("new ahorro", amount)
            }}
          />
        </div>
        <div className="paycheck-amount uk-text-center uk-padding-small">
          <PaycheckAmount label="Total Ahorro:" amount={150} editable={false} />
        </div>
      </div>
      <div data-uk-sticky className="paycheck-add-btn">
        <button
          type="button"
          className="uk-button uk-button-success uk-width-expand"
        >
          Agregar +
        </button>
      </div>
      <hr className="uk-divider-small uk-text-center"></hr>
      <ul
        className="uk-list uk-list-divider"
        data-uk-scrollspy="target: > li; cls: uk-animation-fade; delay: 100"
      >
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
        <li>testing</li>
      </ul>
    </>
  )
}

export default PaycheckTrackerPage
