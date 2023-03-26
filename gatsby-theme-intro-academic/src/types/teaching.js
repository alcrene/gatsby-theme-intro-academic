import { graphql } from "gatsby"
import { arrayOf, shape, string, object, oneOf } from "prop-types"

export const TeachingType = {
  name: string.isRequired,
  url: string,
  description: string,
  date: string,
  kind: oneOf(["class", "tutorial", "write-up"]),
  image: shape({
    childImageSharp: object.isRequired,
  }),
}

export const query = graphql`
  fragment TeachingFragment on TeachingYaml {
    name
    url
    description
    date
    kind
    image {
      childImageSharp {
        gatsbyImageData(width: 640, quality: 85)
      }
    }
  }
`
