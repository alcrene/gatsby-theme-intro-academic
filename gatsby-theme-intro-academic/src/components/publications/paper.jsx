// Not used: Not critical, but also I keep getting “'Paper' is not exported from ” errors
// when I try to use this

import React from "react"
import { PaperType } from "@arene/gatsby-theme-intro-academic/src/types"

const Paper = props => {
  const { authors, title, journal, date, doi, url, pdf, tags} = props
  return (
    <li className="text-front dark:text-front-dark">
      {authors}. <cite>{title}</cite> {journal} ({date})
    </li>
  )
}

Paper.propTypes = PaperType

export default Paper