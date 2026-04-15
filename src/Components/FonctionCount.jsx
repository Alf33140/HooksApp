import { useEffect, useState } from "react"

const FonctionCount = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('Test useEffect');
    // setTimeout(() => {
      document.title = `Vous avez cliqué ${count} fois`
    // }, 5000)
  }, [])

  return (
    <div className="text-center">
      <h1>Vous avez cliqué {count} fois</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>FunctionCount Compte</button>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default FonctionCount