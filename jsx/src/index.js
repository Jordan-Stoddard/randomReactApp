import React from "react";
import ReactDOM from "react-dom";



const App = () => {

    const buttonText = {text: 'click me'}
    const labelText = 'Enter Name'

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input type="text" id="name" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText.text}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
