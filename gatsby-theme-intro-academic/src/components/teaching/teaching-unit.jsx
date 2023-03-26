import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { TeachingType } from "../../types"
import TeachingIcon from "./teaching-icon"
import TeachingDate from "./teaching-date"

const TeachingUnit = props => {
  const { name, url, description, date, kind, image } = props
  return (
    <div className="border-t-4 border-line dark:border-line-dark relative flex flex-wrap bg-back-light dark:bg-back-light-dark p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      {image && (
        <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
          <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={name} />
        </div>
      )}
      <div className="lg:flex-1">
        <h4 className="font-bold">{name}</h4>
        {url && (
          <a
            className="text-front dark:text-front-dark underline break-all hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            {url}
          </a>
        )}
        <p className="w-full py-4 whitespace-pre-line">{description}</p>
        <ul className="pr-2">
          {status && <TeachingDate date={date} />}
        </ul>

        {kind && <TeachingIcon kind={kind} />}
      </div>
    </div>
  )
}

TeachingUnit.propTypes = TeachingType

export default TeachingUnit
