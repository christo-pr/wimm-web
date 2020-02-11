import React from "react"

const ICONS = {
  cart: "Tienda",
  home: "Casa",
  "credit-card": "Tarjeta",
  receiver: "Telefono",
  world: "Viajes (Gasolina)",
  bolt: "Gasto relampago",
  question: "Otra"
}

function Category(props) {
  const { id } = props

  const icon = ICONS[id] ? id : "question"

  return (
    <div className="category-icon">
      <span data-uk-icon={icon}></span>
      <p>{ICONS[id]}</p>
    </div>
  )
}

export default Category
