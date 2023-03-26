import React from "react"
import { arrayOf, shape } from "@arene/gatsby-theme-intro/src/types"
import { Paper } from "@arene/gatsby-theme-intro-academic/src/components/publications/paper"
import { PaperType } from "@arene/gatsby-theme-intro-academic/src/types"

const Publications = ({ papers }) => (
  <>
    <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase mb-3">
      Papers
    </h5>
    <ul>
      {papers.map((paper, i) => (
        // <Paper key={`${paper.key}_${i}`} {...paper} />
        <li className="text-front dark:text-front-dark" key={`${paper.key}_${i}`} >
          <span>{paper.authors.reduce((acc,x) => acc === null ? x : <>{acc}, {x}</>)}</span>
          . <cite>{paper.title}</cite> {paper.journal} ({paper.date})
        </li>
      ))}
    </ul>
  </>
)

Publications.propTypes = {
    papers: arrayOf(shape(PaperType))
}

export default Publications