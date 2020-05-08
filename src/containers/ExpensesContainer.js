import { useEffect } from "react"

import { useApi } from "../hooks/"

function ExpensesContainer(props) {
  const { children } = props
  const { data, get } = useApi("expenses")

  useEffect(() => {
    get()
  }, [])

  if (!data) return null

  return children(data)
}

export default ExpensesContainer
