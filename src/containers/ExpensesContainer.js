import { useEffect } from "react"

import { useApi } from "../hooks/"

function ExpensesContainer(props) {
  const { children } = props
  const [state, request] = useApi()

  useEffect(() => {
    request()
  }, [])

  return children(state)
}

export default ExpensesContainer
