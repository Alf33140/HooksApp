import React, {useState} from "react"

const FunctionState = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>Function State: {counter}</p>
    
      <button onClick={() => setCounter(prevcounter => prevcounter + 1)}>state ds function</button>
    </div>
  )
}

export default FunctionState