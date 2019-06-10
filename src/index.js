
// import react , react-dom  libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create react component
const App = function() {
  const buttonText = 'Click me!';
  return (
    <div>
      <label className="label" htmlFor="name">Enter name: </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'black' }}>{buttonText}</button>
    </div>
  )
};
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
