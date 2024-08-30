import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Hamburger = () => {
  return (
    <FontAwesomeIcon icon={faBars} className="text-2xl md:hidden w-6 h-6" />
  )
}

export default Hamburger
