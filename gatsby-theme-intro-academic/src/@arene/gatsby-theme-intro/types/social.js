import { graphql } from "gatsby"
import { string, oneOf } from "prop-types"

export const SocialType = {
  name: oneOf([
    "github",
    "twitter",
    "linkedin",
    "behance",
    "dribbble",
    "facebook",
    "goodreads",
    "instagram",
    "medium",
    "producthunt",
    "youtube",
    "xing",
    "googlescholar",
    "orcid",
    "researchgate",
    "loop",
  ]),
  url: string,
}

export const query = graphql`
  fragment AcademicSocialFragment on SocialYaml {
    name
    url
  }
`
