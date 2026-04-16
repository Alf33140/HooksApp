import { useReducer } from "react"
//exemple doc rReact switch/case de notification
// function Notification({ text, state }) {
//   switch(state) {
//     case 'info':
//       return <Info text={text} />
//     case 'warning':
//       return <Warning text={text} />
//     case 'error':
//       return <Error text={text} />
//     default:
//       return null
//   }
// }
const initialstate = 0;

const reducer = (state, action) => {
    switch (action) {
        case "AJOUTER":
            return state + 1;
        case "ENLEVER":
            return state - 1;
        case "REINITIALISER":
            return initialstate;
        default:
            return state;
    }
  }

const CountReducer = () => {
const [countresult, dispatch] = useReducer (reducer , initialstate) 
  return (
    <div className="text-center">
      <h1>{countresult}</h1>
      <button className="btn btn-success" onClick={() => dispatch("AJOUTER")}>Ajouter</button>
      <button className="btn btn-danger" onClick={() => dispatch("ENLEVER")}>Enlever</button>
      <button className="btn btn-info" onClick={() => dispatch("REINITIALISER")}>Réinitialiser</button>
    </div>
  )
}

export default CountReducer