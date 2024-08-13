import React from 'react'
function SingleBot(props) {
  const {botdata,listBot,setSingleBot,setModalIsSet} = props
  return (
    <div className='singleBot' onClick={()=>{
      setSingleBot(botdata)
      setModalIsSet(true)

    }}>
        <img src={botdata.avatar_url}/>
        <div className='bot-details'>
         <h2>{botdata.name}</h2>

        </div>
        {
          botdata.listed?(<div className='status'>In Your Army</div>):''
        }
    </div>
  )
}

export default SingleBot