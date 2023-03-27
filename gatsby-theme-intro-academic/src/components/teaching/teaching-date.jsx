import React from "react"
import { TeachingType } from "../../types"

const TeachingDate = ({ date }) => (
  <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back dark:border-back-dark"
      key={`date_${date}`}
  >
    {date}
  </li>
)

TeachingDate.propTypes = {
  date: TeachingType.date,
}

export default TeachingDate
