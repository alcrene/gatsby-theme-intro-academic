import React from "react"
import { PaperType } from "@arene/gatsby-theme-intro-academic/src/types"
import PublicationTags from "./publication-tags"

const Paper = props => {
  const { key, authors, title, journal, date, doi, url, pdf, tags} = props
  return (
    <>
    <dt key={`dt_${key}`} className="font-medium">
      {url ? <a href={url} className="hover:opacity-50">{title}</a> : <>{title}</>}
    </dt>
    <dl key={`dl_${key}`} className="text-sm group mb-2" >
      {authors.reduce((acc,x) => acc === null ? x : <>{acc}, {x}</>)}
      <br />
      <span className="italic pr-1">{journal}</span> ({date})
      {doi &&
        <div
            className="inline-block px-3 font-medium text-xs rounded-lg border border-back dark:border-back-dark"
            title={doi}>
          <span className="hover:opacity-75">doi</span>
          <span className="invisible group-hover:visible">: {doi}</span>
        </div>
      }
      {tags &&
        <><br /><PublicationTags tags={tags} /></>
      }
    </dl>
    </>
  )
}

Paper.propTypes = PaperType

export default Paper