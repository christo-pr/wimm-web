import React from "react"
import ReactDOM from "react-dom"
import UIkit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"
import "regenerator-runtime/runtime" // Parcel async/await hot fix

import App from "./src/App"
import fakeServer from "./mocks/server"

// loads the Icon plugin
UIkit.use(Icons)

// Run fake server on dev
fakeServer.init()

ReactDOM.render(<App />, document.getElementById("root"))
