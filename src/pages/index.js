import React from "react"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `purple` }}>
    <h1>Linking between pages in Gatsby</h1>
    <Link to="/contact/">Contact</Link>
    <p>What a world.</p>
  </div>
)
