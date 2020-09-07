import React from "react"

import Money from "./Money"

function PaycheckItem(props) {
  return (
    <>
      <dt>Description</dt>
      <dd className="uk-flex uk-margin-top">
        <div>
          <span data-uk-icon="credit-card"></span>
          &nbsp;
          <Money amount={100} />
        </div>
        <hr className="uk-divider-small uk-divider-vertical divider-smaller" />
        <div>
          <span data-uk-icon="calendar"></span>
          &nbsp;
          <Money amount={100} />
        </div>
      </dd>
    </>
  )
}

export default PaycheckItem
