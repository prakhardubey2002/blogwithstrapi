import React from 'react';

import {BrowserRouter as Link} from 'react-router-dom'
export default function SiteHeader() {
  return (
    <div className="site-header">
        <Link to="/" >
            <h1>Environment blogs</h1>
        </Link>
    </div>
  )
}
