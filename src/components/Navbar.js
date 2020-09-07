import React from "react"

import { Sidebar } from "./Sidebar"

const sidebarID = "offcanvas-overlay"

export function Navbar() {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <a
            className="uk-navbar-toggle"
            data-uk-toggle={`target: #${sidebarID}`}
            data-uk-navbar-toggle-icon
          ></a>
        </div>
      </nav>
      <Sidebar id={sidebarID} />
    </div>
  )
}
