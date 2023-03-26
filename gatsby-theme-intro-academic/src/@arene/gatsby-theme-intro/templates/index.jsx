import * as React from "react"
import { graphql } from "gatsby"
import CustomFonts from "@arene/gatsby-theme-intro/src/components/custom-fonts/custom-fonts"
import Footer from "@arene/gatsby-theme-intro/src/components/footer/footer"
import Header from "@arene/gatsby-theme-intro/src/components/header/header"
import MainContent from "@arene/gatsby-theme-intro/src/components/main-content/main-content"
import SEO from "@arene/gatsby-theme-intro/src/components/seo/seo"
import Sidebar from "@arene/gatsby-theme-intro/src/components/sidebar/sidebar"
import StructuredData from "@arene/gatsby-theme-intro/src/components/structured-data/structured-data"
import "../styles/styles.css"

const IndexPage = ({ data, pageContext }) => {
  const { history, profile, projects, teaching, site, social, papers } = data

  return (
    <div className="antialiased bg-back dark:bg-back-dark leading-normal font-text text-front dark:text-front-dark">
      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} />

        <MainContent
          history={history.nodes}
          profile={profile}
          projects={projects.nodes}
          teaching={teaching.nodes}
          papers={papers.nodes}
          formspreeEndpoint={site.siteMetadata.formspreeEndpoint}
        />
      </div>

      <Footer
        name={profile.name}
        showThemeLogo={pageContext.showThemeLogo}
      />
    </div>
  )
}

export const Head = ({ data }) => {
  const { history, profile, projects, site, social, papers } = data

  return (
    <>
      <SEO title="Home" />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query AcademicIndexPageQuery {
    site {
      siteMetadata {
        formspreeEndpoint
      }
    }
    profile: profileYaml {
      ...AcademicProfileFragment
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...AcademicSocialFragment
      }
    }
    history: allAcademicHistoryYaml {
      nodes {
        ...AcademicHistoryFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
    teaching: allTeachingYaml {
      nodes {
        ...TeachingFragment
      }
    }
    papers: allPapersYaml {
      nodes {
        ...PaperFragment
      }
    }
  }
`
