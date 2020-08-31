import React from "react"

import CategorySelector from "./CategorySelector"

const ICONS = {
  cart: "Tienda",
  home: "Casa",
  "credit-card": "Tarjeta",
  receiver: "Telefono",
  world: "Viajes (Gasolina)",
  bolt: "Gasto relampago",
  question: "Otra",
}

function Category(props) {
  const { id, selected } = props
  const icon = ICONS[id] ? id : "question"

  return (
    <>
      <div className={`button-circle-icon ${selected && "selected"}`}>
        <span data-uk-icon={icon}></span>
        <p>{ICONS[icon]}</p>
      </div>
    </>
  )
}

export default Category
