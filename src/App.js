import React from "react"
import { Router } from "@reach/router"

import "./App.scss"
import { Navbar } from "./components/"
import { HomePage, ExpensesPage, PaymentsPage } from "./pages/"

function App() {
  return (
    <>
      <Navbar />
      <div className="uk-container main-container">
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
