import React, { useState } from 'react'
import './Genre.css'
function Genre({ genre }) {
  const [active, setActive] = useState(false);

  return (
    <span className={`genre ${active ? "active" : ""}`} onClick={() => { setActive(!active) }}>{genre}</span>
  )
}

export default Genre