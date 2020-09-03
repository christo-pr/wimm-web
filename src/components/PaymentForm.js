import React, { useState, useEffect, forwardRef, useCallback } from "react"
import DatePicker from "react-datepicker"

import { useApi } from "../hooks/"
import CategorySelector from "./CategorySelector"

import utils from "../utils"

const CATEGORIES = [
  "cart",
  "home",
  "credit-card",
  "receiver",
  "world",
  "bolt",
  "question",
]

function PaymentForm(props) {
  const { isInline } = props
  const [institution, setInstitution] = useState("")
  const [quantity, setQuantity] = useState("")
  const [minQuantity, setMinQuantity] = useState("")
  const [date, setDate] = useState(new Date())
  const [category, setCategory] = useState(CATEGORIES[2])
  const [isFocused, setFocus] = useState(isInline)
  const [isValid, setValid] = useState(isInline)

  const LabelDateButton = forwardRef(({ value, onClick }, _ref) => (
    <span onClick={onClick} className="uk-label" ref={_ref}>
      {utils.formatDate(value)}
    </span>
  ))

  useEffect(() => {
    const valid = (institution != "" && quantity > 0)

    setValid(valid)
  }, [quantity])

  const submitForm = useCallback(async () => {
    // post({ institution, quantity, minQuantity, date, category })
    console.log("submitForm -> quantity", quantity)
    console.log("submitForm -> date", date)
    console.log("submitForm -> category", category)
  }, [quantity, date, category])


  return (
    <div>
      <form className="expenses-form">
        <div className="uk-flex uk-flex-column uk-flex-middle">
          <CategorySelector
            selectedCategory={category}
            onSelectCategory={setCategory}
          />
          <div className="uk-margin-small uk-flex uk-flex-middle uk-flex-around">
            <span>Institución: </span>
              <input
                className="uk-input uk-form-small"
                type="text"
                onChange={(e) => setInstitution(e.target.value)}
              />
          </div>
          <div className="uk-margin-small uk-flex uk-flex-middle">
            <span>Pago del mes: </span>
            <div className="uk-relative">
              <span className="currency">MX $</span>
              <input
                className="uk-input uk-form-small"
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="0.00"
                value={quantity}
                onFocus={() => setFocus(true)}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
          <div className="uk-margin-samll uk-flex uk-flex-middle">
            <span>Pago mínimo: </span>
            <div className="uk-relative">
              <span className="currency">MX $</span>
              <input
                className="uk-input uk-form-small"
                type="text"
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="0.00"
                value={minQuantity}
                onFocus={() => setFocus(true)}
                onChange={(e) => setMinQuantity(e.target.value)}
              />
            </div>

          </div>
          <div className="uk-margin-samll uk-flex uk-flex-middle">
            <span>Fecha limite de pago: </span>
            <div
              className={`${isFocused ? "input-focused" : "input-blur"}`}
            >
              <DatePicker
                selected={date}
                onChange={(d) => setDate(d)}
                withPortal
                dateFormat="MMMM d, yyyy"
                customInput={<LabelDateButton />}
              />
            </div>
          </div>
        </div>
        <div className={isValid ? "show uk-flex-center uk-margin-small" : "hide"}>
          <button
            type="button"
            onClick={submitForm}
            className="uk-button uk-button-success"
          >
            Agregar +
          </button>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm