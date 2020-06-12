export const initialPaymentsState = {
  payments: [],
  loading: false,
  error: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true }

    case "success":
      return {
        ...state,
        payments: action.payments,
        loading: false,
      }

    case "error":
      return { ...state, error: action.error }
  }
}

export default reducer
