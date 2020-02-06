import React from "react"
import { Router } from "@reach/router"

import "./App.scss"
import { Header } from "./components/"
import { HomePage, ExpensesPage, PaymentsPage } from "./pages/"

function App() {
  return (
    <>
      <Header />
      <div className="uk-container">
        <Router>
          <HomePage path="/" />
          <ExpensesPage path="expenses" />
          <PaymentsPage path="payments" />
        </Router>
      </div>
    </>
  )
}

export default App
