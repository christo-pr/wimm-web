import React from "react"

function BottomBar() {
  return (
    <div className="bottom-bar uk-position-fixed clickable uk-box-shadow-medium uk-column-1-2">
      <div>
        <a href="">
          <span data-uk-icon="icon: list"></span>
        </a>
      </div>
      <div>
        <a href="">
          <span data-uk-icon="icon: thumbnails"></span>
        </a>
      </div>
    </div>
  )
}

export default BottomBar
