import React, { useState } from "react"
import DatePicker from "react-datepicker"

function DateFilter() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className="date-filter uk-flex uk-flex-around uk-margin-top uk-margin-bottom-small">
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        withPortal
        dateFormat="MMMM d, yyyy"
      />
      <span data-uk-icon="icon: arrow-right"></span>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        withPortal
        dateFormat="MMMM d, yyyy"
      />
    </div>
  )
}

export default DateFilter
