import React from "react"
import { TbChalkboard, TbBook, TbWriting } from "react-icons/tb"
import { TeachingType } from "../../types"

var selectIcon = function selectIcon(kind){
  if (kind === "class")
    return (<TbChalkboard className="w-6 h-6" />)
  else if (kind === "tutorial")
    return (<TbBook className="w-6 h-6" />)
  else if (kind === "write-up")
    return (<TbWriting className="w-6 h-6" />)
  else
    return (<></>)
}

const TeachingIcon = ({ kind }) => (
  <span className="absolute right-0 bottom-0 mb-5 mr-5 text-back dark:text-back-dark">
    {selectIcon(kind)}
    }
  </span>
)

TeachingIcon.propTypes = {
  kind: TeachingType.kind,
}

export default TeachingIcon
