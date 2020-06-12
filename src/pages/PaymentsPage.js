import React from "react"

import { DateFilter, PaymentItem, PaymentForm, Money } from "../components/"
import { PaymentsContainer } from "../containers/"

function Payments() {
  return (
    <PaymentsContainer>
      {({ payments, loading, error}) => (
        <>
          <div className="uk-flex uk-flex-column uk-flex-center uk-background-default">
            <PaymentForm />
            <DateFilter />
          </div>
          <ul
            className="uk-list uk-list-divider"
            uk-scrollspy="target: > li; cls: uk-animation-fade; delay: 500"
          >
            {payments.map(payment => (
              <PaymentItem key={payment.id} payment={payment} />
            ))}
          </ul>
        </>
      )}
    </PaymentsContainer>
  )
}

export default Payments
