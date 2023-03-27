import React from "react"
import { arrayOf, shape } from "@arene/gatsby-theme-intro/src/types"
import Paper from "./paper"
import { PaperType } from "@arene/gatsby-theme-intro-academic/src/types"

const Publications = ({ papers }) => (
  <>
    <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase mb-3">
      Papers
    </h5>
    <dl className="text-front dark:text-front-dark">
      {papers.map((paper, i) => (
        <Paper key={`${paper.key}_${i}`} {...paper} />
      ))}
    </dl>
  </>
)

Publications.propTypes = {
    papers: arrayOf(shape(PaperType))
}

export default Publications