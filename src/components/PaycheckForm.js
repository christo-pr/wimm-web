import React from "react"

export function PaycheckForm(props) {
  return (
    <>
      <div data-uk-sticky className="paycheck-add-btn">
        <button
          type="button"
          className="uk-button uk-button-success uk-width-expand"
          data-uk-toggle="target: #paycheck-item-form"
        >
          +
        </button>
      </div>
      <div id="paycheck-item-form" data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <form>
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Nuevo gasto</legend>
            </fieldset>
            <div className="uk-margin">
              <input
                type="text"
                className="uk-input"
                placeholder="Description"
              />
            </div>
            <div className="uk-margin">
              <input
                type="number"
                className="uk-input"
                step="0.50"
                min="0"
                placeholder="$$"
              />
              <small>Costo Mensual</small>
            </div>
            <button type="submit" className="uk-button uk-button-success">
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
