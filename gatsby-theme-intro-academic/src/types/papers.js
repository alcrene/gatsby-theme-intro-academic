import { graphql } from "gatsby"
import { arrayOf, string, number } from "prop-types"

export const PaperType = {
    authors: arrayOf(string.isRequired).isRequired,
    title: string,
    journal: string,
    date: string,
    doi: string,
    url: string,
    pdf: string,
    tags: arrayOf(string)
}

export const query = graphql`
  fragment PaperFragment on PapersYaml {
    authors
    title
    journal
    date
    doi
    url
    pdf
    tags
  }
`