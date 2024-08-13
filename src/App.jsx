import { useEffect, useState } from "react"
import { fetchBots, fetchSingleBot, listBot } from "../Services"
import BotCollection from "./Components/BotCollection"
import { Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar"
import YourBotArmy from "./Components/YourBotArmy"

function App() {
  const [bots,setBots] = useState([])
  const [singleBot, setSingleBot] = useState([])
  const handleBotFetch = async()=>{
    let response = await fetchBots()
    setBots(response)
  }
  useEffect(()=>{
    handleBotFetch()
    console.log(singleBot)
  },[singleBot])
  const [modalIsSet, setModalIsSet] = useState(false)
  return (
    <section className="bot-home">
    <NavBar army={bots}/>
    <Routes>
      <Route path="/" 
        element={
          <>
          <BotCollection data={bots} listBot={listBot} singleBot={singleBot} setSingleBot={setSingleBot} setModalIsSet={setModalIsSet} modalIsSet={modalIsSet}/>
           </>
          }

        />
      <Route path="/army" element={<YourBotArmy data={bots} listBot={listBot} singleBot={singleBot} setSingleBot={setSingleBot} setModalIsSet={setModalIsSet} modalIsSet={modalIsSet}/>}/>
    </Routes>
    </section> 
  )
}

export default App
