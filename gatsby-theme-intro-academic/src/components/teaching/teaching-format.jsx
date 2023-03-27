import React from "react"
import { TbPresentation, TbScript, TbChalkboard, TbWriting } from "react-icons/tb"
import { TeachingType } from "../../types"

var selectFormat = function selectFormat(format){
  if (format === "slides")
    return (<><TbPresentation className="inline-block w-5 h-5" /> {format}</>)
  else if (format === "write-up")
    return (<><TbScript className="inline-block w-5 h-5" /> {format}</>)
  else if (format === "chalk talk")
    return (<><TbChalkboard className="inline-block w-5 h-5" /> {format}</>)
  else if (format === "hand-drawn slides")
    return (<><TbWriting className="inline-block w-5 h-5" /> {format}</>)
  else
    return <>{format}</>
}

const TeachingFormat = ({ format }) => (
  <li
    className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back dark:border-back-dark"
    key={`format_${format}`}
  >
    {selectFormat(format)}
  </li>
)

TeachingFormat.propTypes = {
  format: TeachingType.format,
}

export default TeachingFormat
