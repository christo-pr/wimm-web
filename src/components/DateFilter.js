import React, { useState } from "react"
import DatePicker from "react-datepicker"

import utils from "../utils"

export function DateFilter() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(utils.addMonths(startDate, 1))

  return (
    <div className="date-filter uk-flex uk-flex-around uk-margin-top uk-margin-bottom-small">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        withPortal
        dateFormat="MMMM d, yyyy"
      />
      <span data-uk-icon="icon: arrow-right"></span>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        withPortal
        dateFormat="MMMM d, yyyy"
      />
    </div>
  )
}
