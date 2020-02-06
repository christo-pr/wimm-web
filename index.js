import React from "react"
import ReactDOM from "react-dom"
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

import App from "./src/App"

ReactDOM.render(<App />, document.getElementById("root"))
