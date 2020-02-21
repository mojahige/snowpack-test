import React from '/web_modules/react.js'
import ReactDOM from '/web_modules/react-dom.js'

const App = () => <h1>Hello, world!</h1>

const init = () => {
  const root = document.getElementById('root')

  if (root) {
    ReactDOM.render(<App />, root)
  }
}

document.addEventListener('DOMContentLoaded', init)
