import React from 'react'
import ReactDOM from 'react-dom/client'
import styled, { StyleSheetManager } from 'styled-components'

window.checkTranspileAndAutoPolyfill = () => Promise.resolve().then(() => console.log('hi'))

console.log('hi')

const Box = styled('div')`
  display: flex;
  border: 1px solid blue;
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleSheetManager enableVendorPrefixes>
      <Box>hi</Box>
    </StyleSheetManager>
  </React.StrictMode>,
)

