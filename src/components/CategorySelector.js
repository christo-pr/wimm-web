import React, { useRef } from "react"

import Category from "./Category"

const CATEGORIES = [
  "cart",
  "home",
  "credit-card",
  "receiver",
  "world",
  "bolt",
  "question",
]
const ICONS = {
  cart: "Tienda",
  home: "Casa",
  "credit-card": "Tarjeta",
  receiver: "Telefono",
  world: "Viajes (Gasolina)",
  bolt: "Gasto relampago",
  question: "Otra",
}
const categorySelectorId = "category-selector"

function CategorySelector(props) {
  const { selectedCategory, onSelectCategory } = props
  const modalButtonRef = useRef()

  const closeModal = (category) => {
    onSelectCategory(category)

    // Close modal by clicking again on the button
    modalButtonRef.current.click()
  }

  return (
    <>
      <div
        className="button-circle-icon"
        ref={modalButtonRef}
        data-uk-toggle={`target: #${categorySelectorId}`}
      >
        <span data-uk-icon={selectedCategory}></span>
        <p>{ICONS[selectedCategory]}</p>
      </div>
      <div id={categorySelectorId} data-uk-modal>
        <div className="uk-modal-dialog uk-modal-body">
          <p className="uk-modal-title uk-text-small">Escoge una categoria</p>
          <hr />
          <div className="uk-child-width-1-3 uk-margin-large-top" data-uk-grid>
            {CATEGORIES.map((cat) => (
              <div onClick={() => closeModal(cat)} key={cat}>
                <Category id={cat} selected={cat === selectedCategory} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CategorySelector
