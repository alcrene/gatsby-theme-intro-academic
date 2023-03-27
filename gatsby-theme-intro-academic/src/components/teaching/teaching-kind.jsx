import React from "react"
import { BsBookFill, BsBook } from "react-icons/bs"
import { TeachingType } from "../../types"

var selectKind = function selectKind(kind){
  if (kind === "class")
    return (<><BsBookFill className="inline-block w-5 h-5 mr-1" /> {kind}</>)
  else if (kind === "tutorial")
    return (<><BsBook className="inline-block w-5 h-5 mr-1" /> {kind}</>)
  else
    return <>{kind}</>
}

const TeachingKind = ({ kind }) => (
  <li
    className="inline-block px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border border-back dark:border-back-dark"
    key={`kind_${kind}`}
  >
    {selectKind(kind)}
  </li>
)

TeachingKind.propTypes = {
  kind: TeachingType.kind,
}

export default TeachingKind
