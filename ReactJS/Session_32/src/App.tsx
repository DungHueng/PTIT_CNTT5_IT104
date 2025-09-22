import { useSelector } from "react-redux"

function App() {
  const state = useSelector((state)=>{return state})
  console.log(state);
  return (
    <>
      
    </>
  )
}

export default App
