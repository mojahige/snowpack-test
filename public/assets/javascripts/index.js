import React from '/web_modules/react.js';
import ReactDOM from '/web_modules/react-dom.js';
const App = () => React.createElement("h1", null, "Hello, world!");
const init = () => {
    const root = document.getElementById('root');
    if (root) {
        ReactDOM.render(React.createElement(App, null), root);
    }
};
document.addEventListener('DOMContentLoaded', init);
