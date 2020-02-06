import React from "react"

function Sidebar(props) {
  const { id } = props

  return (
    <div id={id} data-uk-offcanvas="overlay: true" className="sidebar">
      <div className="uk-offcanvas-bar">
        <button
          className="uk-offcanvas-close"
          type="button"
          data-uk-close
        ></button>

        <ul className="uk-list uk-list-divider sidebar-menu">
          <li>
            <a href="">
              <span
                data-uk-icon="home"
                className="uk-margin-small-right"
              ></span>
              Inicio
            </a>
          </li>
          <li className="uk-margin-top">
            <a href="">
              <span
                data-uk-icon="cart"
                className="uk-margin-small-right"
              ></span>
              Gastos
            </a>
          </li>
          <li className="uk-margin-top">
            <a href="">
              <span
                data-uk-icon="credit-card"
                className="uk-margin-small-right"
              ></span>
              Pagos
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
