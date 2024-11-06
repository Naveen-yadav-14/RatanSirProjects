import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import AllItems from './AllItems.jsx'
import VegItems from './VegItems.jsx'
import Button1 from './Button1.jsx'
import Apple from './Apple.jsx'
import Blog from './Blog.jsx'
import MovieGrid from './MovieGrid.jsx'
import Test from './Test.jsx'
import Date from './Date1.jsx'
import Date1 from './Date1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 {/* <MovieGrid></MovieGrid> */}
{/* <App/> */}
{/* <Test/> */}
<Date1/>
  </StrictMode>,
)
