import React, { useContext } from 'react'
import accountContext from '../context/accounts/accountContext'
const About = () => {
  const a = useContext(accountContext)
  return (
    <div>
      This is About
    </div>
  )
}

export default About
