import React from "react"
import { arrayOf, shape } from "@arene/gatsby-theme-intro/src/types"
import { AcademicHistoryType } from "@arene/gatsby-theme-intro-academic/src/types"
import "@arene/gatsby-theme-intro/src/components/work-history/work-history.css"

const WorkHistory = ({ history }) => {
  return (
    <>
      <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase mt-12 mb-3 text-center">
        Academic history
      </h5>
      <div className="history flex flex-col relative pt-6 pb-6">
        {history.map(({ group, group_url, department, institution, institution_url, period, position }, i) => (
          <div
            className="history-entry relative w-1/2 py-4"
            key={`${group}_${i}`}
          >
            <span className="dot-bg w-14 h-14 absolute bg-line dark:bg-line-dark inline-flex rounded-full items-center justify-center">
              <span className="dot w-5 h-5 bg-back-light dark:bg-back-light-dark rounded-full" />
            </span>
            {group_url ? (
              <h4 className="subpixel-antialiased">
                <a href={group_url} target="_blank" rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity duration-150">
                  {group}
                </a>
              </h4>
            ) : (
              <h4 className="subpixel-antialiased">{group}</h4>
            )}

            {institution_url && (
              <h5 className="text-base font-normal">
                <a href={institution_url} target="_blank" rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity duration-150">
                  {department && (<span>{department} – </span>)}{institution}
                </a>
              </h5>
            )}
            {(!institution_url && institution) && (
              <h5 className="text-base font-normal">
                  {department && (<span>{department} – </span>)}{institution}
              </h5>
            )}

            {position && (
              <h5 className="text-sm font-normal mb-1">{position}</h5>
            )}
            {period && (
              <span className="text-sm font-medium opacity-50">{period}</span>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

WorkHistory.propTypes = {
  history: arrayOf(shape(AcademicHistoryType)),
}

export default WorkHistory
