import React from "react"

import { PaymentsContainer } from "../containers/PaymentsContainer"
import { DateFilter, PaymentItem, PaymentForm } from "../components/"

export function PaymentsPage() {
  return (
    <PaymentsContainer>
      {({ payments, loading, error }) => (
        <>
          <div className="uk-flex uk-flex-column uk-flex-center uk-background-default">
            <PaymentForm />
            <DateFilter />
          </div>
          <ul
            className="uk-list uk-list-divider"
            uk-scrollspy="target: > li; cls: uk-animation-fade; delay: 500"
          >
            {payments.map((payment) => (
              <PaymentItem key={payment.id} payment={payment} />
            ))}
          </ul>
        </>
      )}
    </PaymentsContainer>
  )
}
