import React, { useEffect, useState } from "react"
import api from "../utils/api"
import { DateFilter, PaymentItem } from "../components/"

function Payments() {
  const [payments, setPayments] = useState([])

  useEffect(() => {
    api.getPayments().then(res => {
      setPayments(res.payments)
      console.log(res.payments)
    })
  }, [])
  return (
    <>
      <div className="uk-flex uk-flex-column uk-flex-center uk-background-default">
        <div data-uk-sticky className="sticky-add-button">
          <button className="uk-button uk-button-primary uk-width-expand">
            Agregar +{" "}
          </button>
        </div>
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
  )
}

export default Payments
