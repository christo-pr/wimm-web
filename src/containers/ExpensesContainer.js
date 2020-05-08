import { useEffect } from "react"

import { useApi } from "../hooks/"

function ExpensesContainer(props) {
  const { children } = props
  const { data, get } = useApi("expenses")

  useEffect(() => {
    get()
  }, [])

  return children(data)
}

export default ExpensesContainer
