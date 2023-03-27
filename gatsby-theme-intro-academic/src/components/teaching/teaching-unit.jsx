import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { TeachingType } from "../../types"
import TeachingDate from "./teaching-date"
import TeachingLength from "./teaching-length"
import TeachingFormat from "./teaching-format"
import TeachingKind from "./teaching-kind"

const TeachingUnit = props => {
  const { title, kind, format, date, length, url, description, image } = props
  return (
    <div className="border-t-4 border-line dark:border-line-dark relative flex flex-wrap bg-back-light dark:bg-back-light-dark p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      {image && (
        <div className="w-full pb-4 lg:w-2/5 lg:pr-8 lg:pb-0">
          <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={title} />
        </div>
      )}
      <div className="lg:flex-1">
        <h4 className="font-bold">{title}</h4>
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
        {description && <p className="w-full py-4 whitespace-pre-line">{description}</p>}
        <ul className="pr-2 mt-2">
          {date && <TeachingDate date={date} />}
          {kind && <TeachingKind kind={kind} />}
          {format && <TeachingFormat format={format} />}
          {length && <TeachingLength length={length} />}
        </ul>

      </div>
    </div>
  )
}

TeachingUnit.propTypes = TeachingType

export default TeachingUnit
