export const initialState = {
  expenses: [],
  totalExpense: 0,
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
        expenses: action.expenses,
        totalExpense: action.expenses.reduce((acc, v) => acc + v.amount, 0),
        loading: false,
      }

    case "error":
      return { ...state, error: action.error }
  }
}

export default reducer
