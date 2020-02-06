import React from "react"

import Sidebar from "./Sidebar"

const sidebarID = "offcanvas-overlay"

function Header() {
  return (
    <>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <a
                data-uk-toggle={`target: #${sidebarID}`}
                data-uk-icon="icon: menu; ratio: 2"
              ></a>
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar id={sidebarID} />
    </>
  )
}

export default Header
