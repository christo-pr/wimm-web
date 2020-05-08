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

function ExpenseForm(props) {
  const { isInline } = props
  const [quantity, setQuantity] = useState("")
  const [date, setDate] = useState(new Date())
  const [category, setCategory] = useState(CATEGORIES[6])
  const [isFocused, setFocus] = useState(isInline)
  const [isValid, setValid] = useState(isInline)
  const { post } = useApi("expenses")

  const LabelDateButton = forwardRef(({ value, onClick }, _ref) => (
    <span onClick={onClick} className="uk-label" ref={_ref}>
      {utils.formatDate(value)}
    </span>
  ))

  useEffect(() => {
    const valid = quantity.trim().replace(/ /g, "") !== ""

    setValid(valid)
  }, [quantity])

  const submitForm = useCallback(async () => {
    post({ quantity, date, category })
  }, [])

  return (
    <div>
      <form className="expenses-form">
        <div className="uk-flex uk-flex-column uk-flex-middle">
          <div className="uk-margin uk-flex uk-flex-middle">
            <CategorySelector
              selectedCategory={category}
              onSelectCategory={setCategory}
            />
            <input
              className="uk-input uk-form-small placeholder-center uk-margin-left"
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              value={quantity}
              onFocus={() => setFocus(true)}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="$$ Cantidad $$"
            />
          </div>

          <div
            className={`uk-margin-bottom ${
              isFocused ? "input-focused" : "input-blur"
            }`}
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
        <div className={isValid ? "show" : "hide"}>
          <button
            type="submit"
            className="uk-button uk-button-success uk-width-expand"
          >
            Agregar +
          </button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm
