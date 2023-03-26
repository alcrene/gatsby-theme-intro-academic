import React from "react"
import TeachingUnit from "./teaching-unit"
import { arrayOf, shape, TeachingType } from "../../types"

const Teaching = ({ teaching }) => (
  <>
    <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase mb-3">
      Teaching
    </h5>
    {teaching.map((unit, i) => (
      <TeachingUnit key={`${unit.name}_${i}`} {...unit} />
    ))}
  </>
)

Teaching.propTypes = {
  teaching: arrayOf(shape(TeachingType)),
}

export default Teaching
