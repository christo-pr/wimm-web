import { useReducer, useCallback } from "react"

import expensesReducer, { initialState } from "../store/expensesReducer"
import api from "../utils/api"

const useApi = () => {
  const [state, dispatch] = useReducer(expensesReducer, initialState)

  // action creators
  const loading = () => ({ type: "loading" })
  const success = response => ({ type: "success", expenses: response })
  const error = error => ({ type: "error", expenses: [], error: error })

  const request = useCallback(async () => {
    dispatch(loading())
    try {
      const res = await api.expenses.get()
      dispatch(success(res.expenses))
    } catch (err) {
      dispatch(error(errr))
    }
  }, [])

  return [state, request]
}

export default useApi
