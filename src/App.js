import React from "react"
import "./App.scss"

import { Header } from "./components/"

function App() {
  return (
    <>
      <Header />
      <div className="uk-container">
        <h1>TEST REACT</h1>
        <div className="uk-placeholder">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi,
          quibusdam!
        </div>
      </div>
    </>
  )
}

export default App
