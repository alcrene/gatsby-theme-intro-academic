import React from "react"
import { TbClock } from "react-icons/tb"
import { TeachingType } from "../../types"

const TeachingLength = ({ length }) => (
  <li className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back dark:border-back-dark"
      key={`length_${length}`}
  >
    <TbClock className="inline-block w-5 h-5 mr-1" />
    {length}
  </li>
)

TeachingLength.propTypes = {
  length: TeachingType.length,
}

export default TeachingLength
