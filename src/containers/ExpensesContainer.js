import { useEffect } from "react"

import { useApi } from "../hooks/"

export function ExpensesContainer(props) {
  const { children } = props
  const { data, get } = useApi("expenses")

  useEffect(() => {
    get()
  }, [])

  return children(data)
}
