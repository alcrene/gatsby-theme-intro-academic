import React from "react"
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaGoodreadsG,
  FaMediumM,
  FaInstagram,
  FaLinkedinIn,
  FaProductHunt,
  FaTwitter,
  FaYoutube,
  FaXing
  // FaOrcid,
  // FaResearchgate
} from "react-icons/fa"
import {
  SiGooglescholar,
  SiOrcid,
  SiResearchgate,
  SiLoop
} from "react-icons/si"
import { SocialType } from "../../types/social"

const SocialIcon = ({ name, ...params }) => {
  const icons = {
    behance: FaBehance,
    dribbble: FaDribbble,
    facebook: FaFacebook,
    github: FaGithub,
    goodreads: FaGoodreadsG,
    medium: FaMediumM,
    instagram: FaInstagram,
    linkedin: FaLinkedinIn,
    producthunt: FaProductHunt,
    twitter: FaTwitter,
    youtube: FaYoutube,
    xing: FaXing,
    googlescholar: SiGooglescholar,
    orcid: SiOrcid,
    researchgate: SiResearchgate,
    loop: SiLoop
  }

  const Icon = icons[name]

  return Icon ? <Icon {...params} /> : null
}

SocialIcon.propTypes = {
  name: SocialType.name,
}

export default SocialIcon
