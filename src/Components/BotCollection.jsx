import React from 'react'
import SingleBot from './SingleBot'
import BotDetails from "./BotDetails"
import { useState } from 'react'

function BotCollection(props) {
  const {data,listBot,singleBot,setSingleBot,setModalIsSet,modalIsSet} = props
  return (
    <div className='bot-collection'>
    {
      data.map((bot)=>{
        return(<SingleBot
                   botdata={bot} 
                   key={bot.id} 
                   listBot={listBot} 
                   setSingleBot={setSingleBot}
                   setModalIsSet={setModalIsSet}
                     />)
      })
    }
    {modalIsSet?<BotDetails singleBot={singleBot} setModalIsSet={setModalIsSet} setSingleBot={setSingleBot}/>:''}
    </div>
  )
}

export default BotCollection