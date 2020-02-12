export const initialState = {
  expenses: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true }

    case "success":
      return { ...state, expenses: action.expenses, loading: false }

    case "error":
      return { ...state, error: action.error }
  }
}

export default reducer
