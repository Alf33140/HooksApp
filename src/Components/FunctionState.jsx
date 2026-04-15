import React, {useState} from "react"

const FunctionState = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <p>Function State:</p>
      <p>compteur: {counter}</p>
      <button onClick={() => setCounter(prevcounter => prevcounter + 1)}>functionState</button>
    </div>
  )
}

export default FunctionState