import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Test from './Test.jsx'

// The above imports can be done in any jsx component in the particular project.
// For example, as I've created Test.jsx can be imported in App.jsx as well, which is further imported in main.jsx.

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode is used for development purpose only. It can be removed.
  <React.StrictMode>
    {/* Calling the imported components. Also note down the comment syntax. */}
    <App />
    <Test />
  </React.StrictMode>,
)
