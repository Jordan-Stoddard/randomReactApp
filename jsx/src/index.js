import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return (
        <div>
            <label class="label" for="name">Enter Name:</label>
            <input type="text" id="name"/>
            <button style="background-color: blue; color: white;">Submit</button>
        </div>
    );
};

ReactDOM.render(
<App/>,
document.querySelector('#root')
)