import { useEffect } from "react"

import { useApi } from "../hooks/"

function PaymentsContainer(props) {
  const { children } = props
  const { data, get } = useApi("payments")

  useEffect(() => {
    get()
  }, [])

  return children(data)
}

export default PaymentsContainer
