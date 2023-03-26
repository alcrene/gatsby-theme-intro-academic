import React from "react"
import Topic from "./topic"
import { ProfileType } from "@arene/gatsby-theme-intro/src/types"

const Topics = ({ topics }) => (
  <>
    <h5 className="font-header font-semibold text-front dark:text-front-dark text-sm uppercase mb-3">
      Topics
    </h5>
    <ul className="flex flex-wrap grid grid-cols-3 gap-2 md:gap-4">
      {topics.map((topic, i) => (
        <Topic topic={topic} key={topic} i={i + 1} />
      ))}
    </ul>
  </>
)

Topics.propTypes = {
  topics: ProfileType.topics,
}

export default Topics
