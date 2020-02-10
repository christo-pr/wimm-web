import React from "react"

import Sidebar from "./Sidebar"

const sidebarID = "offcanvas-overlay"

function Header() {
  return (
    <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
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

export default Header
