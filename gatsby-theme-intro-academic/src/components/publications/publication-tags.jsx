import React from "react"
import { PaperType } from "../../types"

const PublicationTags = ({ tags }) => (
  <>
    {tags.map(tag => (
      <li
        className="inline-block opacity-50 group-hover:opacity-100 px-3 py-1 mr-1 mt-1 font-medium text-xs rounded-lg border bg-back-light dark:bg-back-light-dark border-back dark:border-back-dark"
        key={tag}
      >
        {tag}
      </li>
    ))}
  </>
)

PublicationTags.propTypes = {
  tags: PaperType.tags,
}

export default PublicationTags
