import React from '/web_modules/react.js'
import ReactDOM from '/web_modules/react-dom.js'
import { Heading } from './components/heading.js'

const App = () => (
  <>
    <Heading text="Hello World" level={1} />
  </>
)

const init = () => {
  const root = document.getElementById('root')

  if (root) {
    ReactDOM.render(<App />, root)
  }
}

document.addEventListener('DOMContentLoaded', init)
