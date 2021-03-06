import React, { useState } from "react"

import { Money } from "./Money"

export function PaycheckAmount(props) {
  const { label, amount, onChangeAmount, editable = true } = props
  const [editMode, setEditMode] = useState(false)
  const [newAmount, setNewAmount] = useState(amount)

  return (
    <div className="paycheck-amount uk-text-center uk-padding-small uk-padding-remove-bottom">
      <small>{label}</small>
      <div className="uk-margin-small">
        {!editMode && (
          <h5>
            <Money amount={amount} />
          </h5>
        )}
        {editMode && (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              onChangeAmount(newAmount)
              setEditMode(false)
            }}
          >
            <input
              type="number"
              className="uk-input"
              value={newAmount}
              step="0.50"
              min="0"
              onChange={(e) => setNewAmount(e.target.value)}
              autoFocus={true}
            />
          </form>
        )}

        {editable && (
          <button
            className="button-circle-icon"
            type={!editMode ? "button" : "submit"}
            onClick={() => {
              if (editMode) {
                onChangeAmount(newAmount)
                setEditMode(false)
              } else {
                setEditMode(true)
              }
            }}
          >
            <span data-uk-icon={editMode ? "check" : "pencil"}></span>
          </button>
        )}
      </div>
    </div>
  )
}
