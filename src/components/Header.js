import React from 'react'

const Header = (props) => {
  return (
    <header className="top">
      <h2 className="header-title">Smelly Fish Food</h2>
      <p className="tagline">{props.tagline}</p>
    </header>
  )
}

export default Header
