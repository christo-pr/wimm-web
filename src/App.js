import React from "react"
import { Router } from "@reach/router"

import "./App.scss"
import { Navbar, BottomBar } from "./components/"
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
      <BottomBar />
    </>
  )
}

export default App
