import React from "react"
import { number, string } from "prop-types"
import TopicSvg from "./topic.svg"

const Topic = ({ topic, i }) => (
  <li
    className={`relative flex justify-center items-center rounded-full border-2 border-skill-${i} dark:border-skill-${i}-dark`}
  >
    <span className="absolute font-header font-semibold text-front dark:text-front-dark text-lg sm:text-xl md:text-xl px-2 text-center">
      {topic}
    </span>
    <TopicSvg className={`w-full text-skill-${i} dark:text-skill-${i}-dark opacity-75 m-2`} />
  </li>
)

Topic.propTypes = {
  topic: string.isRequired,
  i: number.isRequired,
}

export default Topic
