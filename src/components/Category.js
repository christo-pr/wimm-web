import React from "react"

const ICONS = {
  cart: "Tienda",
  home: "Casa",
  "credit-card": "Tarjeta",
  receiver: "Telefono",
  world: "Viajes (Gasolina)",
  bolt: "Gasto relampago",
  invoice: "Factura",
  question: "Otra"
}

export function Category(props) {
  const { id, selected } = props
  const icon = ICONS[id] ? id : "question"

  return (
    <>
      <div className={`category-icon ${selected && "selected"}`}>
        <span data-uk-icon={icon}></span>
        <p>{ICONS[icon]}</p>
      </div>
    </>
  )
}
