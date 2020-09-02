import React, { useState } from "react"

import Money from "./Money"

function PaycheckForm(props) {
  const { label, amount, onChangeAmount, editable = true } = props
  const [editMode, setEditMode] = useState(false)
  const [newAmount, setNewAmount] = useState(amount)

  return (
    <div className="paycheck-amount uk-text-center uk-padding-small">
      <small>{label}</small>
      <div className="uk-margin-small">
        {!editMode && (
          <h4>
            <Money amount={amount} />
          </h4>
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
              value={newAmount}
              step="0.50"
              min="0"
              onChange={(e) => setNewAmount(e.target.value)}
              autoFocus={true}
            />
          </form>
        )}

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
          disabled={!editable}
        >
          <span data-uk-icon={editMode ? "check" : "pencil"}></span>
        </button>
      </div>
    </div>
  )
}

export default PaycheckForm
