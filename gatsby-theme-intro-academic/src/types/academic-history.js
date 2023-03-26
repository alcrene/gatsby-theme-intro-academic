import { graphql } from "gatsby"
import { string } from "prop-types"

export const AcademicHistoryType = {
  group: string.isRequired,
  group_url: string,
  department: string,
  institution: string,
  institution_url: string,
  period: string,
  position: string,
}

export const query = graphql`
  fragment AcademicHistoryFragment on AcademicHistoryYaml {
    group
    group_url
    department
    institution
    institution_url
    period
    position
  }
`
