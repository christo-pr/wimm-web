import React from "react"

const ICONS = [
  { name: "Carro", icon: "cart" },
  { name: "Casa", icon: "home" },
  { name: "Tarjeta", icon: "credit-card" },
  { name: "Telefono", icon: "receiver" },
  { name: "Viajes (Gasolina)", icon: "world" },
  { name: "Gasto relampago", icon: "bolt" },
  { name: "Otra", icon: "question" }
]

function Category(props) {
  const { id } = props

  let category = ICONS.find(cat => cat.icon === id)

  if (!category) {
    category = { name: "Otra", icon: "question" }
  }

  return (
    <div className="category-icon">
      <span data-uk-icon={category.icon}></span>
      <p>{category.name}</p>
    </div>
  )
}

export default Category
