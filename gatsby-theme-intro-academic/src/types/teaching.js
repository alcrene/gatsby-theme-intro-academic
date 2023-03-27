import { graphql } from "gatsby"
import { arrayOf, shape, string, object, oneOf } from "prop-types"

export const TeachingType = {
  title: string.isRequired,
  kind: string, //oneOf(["class", "tutorial"]),
  format: string, //oneOf["slides", "write-up", "chalk talk", "hand-drawn slides"]
  length: string,
  url: string,
  description: string,
  date: string,
  image: shape({
    childImageSharp: object.isRequired,
  }),
}

export const query = graphql`
  fragment TeachingFragment on TeachingYaml {
    title
    kind
    format
    length
    url
    description
    date
    image {
      childImageSharp {
        gatsbyImageData(width: 640, quality: 85)
      }
    }
  }
`
