import React from "react"
import { FaEnvelope } from "react-icons/fa"
import { BsMoon,  BsSun} from "react-icons/bs"
import { ProfileType } from "@arene/gatsby-theme-intro/src/types"

// Javascript for dark mode toggle:
// document.getElementsByTagName("html")[0].classList.add("dark")
// document.getElementsByTagName("html")[0].classList.remove("dark")

const Header = ({ initials, email }) => {

  return (
  <header className="flex justify-between p-4 lg:px-8">
    <span className="inline-flex w-14 h-14 font-header font-bold text-xl justify-center items-center text-center text-front dark:text-front-dark border-2 border-solid border-front dark:border-front-dark rounded-full">
      {initials}
    </span>
    <div className="inline-flex items-center">
      <div id="dark-mode-toggle" className="inline-flex mr-4 hover:opacity-50">
        <BsSun size={22} alt="light mode" className="dark:hidden inline"
         onClick={ ()=>{document.getElementsByTagName("html")[0].classList.add("dark")} } />
        <BsMoon size={22} alt="dark mode" className="hidden dark:inline"
         onClick={ ()=>{document.getElementsByTagName("html")[0].classList.remove("dark")} } />
      </div>
      {/*<a
        className="inline-flex w-14 h-14 font-header font-semibold px-2 bg-lead dark:bg-lead-dark rounded-full text-lead-text dark:text-lead-text-dark justify-center items-center leading-tight lg:w-auto lg:h-auto lg:px-6 lg:py-2 lg:rounded-lg hover:opacity-75 transition-opacity duration-150"
        href="#contact"
      >
        <FaEnvelope className="inline-block h-6 w-6 lg:hidden" />
        <span className="hidden lg:block">Contact me</span>
      </a>*/}
    </div>
  </header>
) }

Header.propTypes = {
  initials: ProfileType.initials,
}

export default Header
