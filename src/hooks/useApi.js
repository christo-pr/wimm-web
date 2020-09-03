import { useReducer, useCallback } from "react"

import expensesReducer, { initialState } from "../store/expensesReducer"
import paymentsReducer, { initialPaymentsState } from "../store/paymentsReducer"
import api from "../utils/api"

const REDUCERS = {
  expenses: {
    reducer: expensesReducer,
    state: initialState,
    actions: {
      loading: () => ({ type: "loading" }),
      postSucess: () => ({ type: "success" }),
      getSuccess: (response) => ({
        type: "success",
        expenses: response.expenses,
      }),
      error: (error) => ({ type: "error", expenses: [], error: error }),
    },
  },
  payments: {
    reducer: expensesReducer,
    state: initialPaymentsState,
    actions: {
      loading: () => ({ type: "loading" }),
      postSucess: () => ({ type: "success" }),
      getSuccess: (response) => ({
        type: "success",
        payments: response.payments,
      }),
      error: (error) => ({ type: "error", payments: [], error: error }),
    },
  },
}

const useApi = (reducerType) => {
  const [state, dispatch] = useReducer(
    REDUCERS[reducerType].reducer,
    REDUCERS[reducerType].state
  )
  const actions = REDUCERS[reducerType].actions

  const post = useCallback(async (body) => {
    dispatch(actions.loading())
    try {
      const res = await api[reducerType].post(body)
      dispatch(actions.postSucess(res))
    } catch (err) {
      dispatch(actions.error(err))
    }
  }, [])

  const get = useCallback(async () => {
    dispatch(actions.loading())
    try {
      const res = await api[reducerType].get()
      dispatch(actions.getSuccess(res))
    } catch (err) {
      dispatch(actions.error(err))
    }
  }, [])

  return {
    data: state,
    post,
    get,
  }
}

export default useApi
