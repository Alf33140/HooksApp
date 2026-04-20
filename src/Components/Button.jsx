import React from "react";

function Button({handleClick, btnColor, increment,children}) {

    console.log(`Button: ${children}`);

    return <button onClick={() => handleClick(increment)} className={`btn btn-${btnColor}`}>+ {increment}% </button>
}

export default React.memo(Button)