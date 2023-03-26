import { graphql } from "gatsby"
import { arrayOf, bool, number, shape, string, object } from "prop-types"

export const ProfileType = {
  // Fields inherited from gatsby-theme-intro but which we don’t need
  budget: shape({                     // Not used
    currency: string.isRequired,      // Not used
    default: number.isRequired,       // Not used
    max: number.isRequired,           // Not used
    min: number.isRequired,           // Not used
  }),                                 // Not used
  company: string,                    // Replaced by 'institution'
  focus: string,                      // Replace by 'research_focus'
  skills: arrayOf(string),            // Replaced by 'topics'
  // Fields we actually use
  for_hire: bool,
  relocation: bool,
  about: string.isRequired,
  institution: string.isRequired,     // Added
  research_focus: string.isRequired,  // Added
  focus_url: string,                  // TODO: Replace with a link to more info on research program
  image: shape({
    childImageSharp: object.isRequired,
    publicURL: string.isRequired,
  }),
  initials: string.isRequired,
  location: string.isRequired,
  name: string.isRequired,
  profession: string.isRequired,
  topics: arrayOf(string).isRequired,
  tools: arrayOf(string).isRequired,
}

export const query = graphql`
  fragment AcademicProfileFragment on ProfileYaml {
    budget {
      currency
      default
      max
      min
    }
    company
    focus
    for_hire
    relocation
    about
    institution
    research_focus
    focus_url
    image {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 144, height: 144, quality: 85)
      }
      publicURL
    }
    initials
    location
    name
    profession
    topics
    tools
  }
`
