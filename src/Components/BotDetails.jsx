import { listBot } from "../../Services/Services"
function BotDetails(props) {
    const {singleBot,setModalIsSet,setSingleBot} = props
  return (
    <div className="botModal">
        <div className="bot-props">
            <h2>{singleBot.name}</h2>
            <h4>{singleBot.bot_class}</h4>
            <div className="prop-slides">
                <div className="singleProp">
                    <span>Health</span>
                    <div>
                        <div className="propProgress" style={{width:`${singleBot.health.toString()}%`}}></div>
                    </div>
                    <p>{singleBot.health}</p>
                </div>
                <div className="singleProp">
                    <span>Damage</span>
                    <div>
                        <div className="propProgress" style={{width:`${singleBot.damage.toString()}%`}}></div>
                    </div>
                    <p>{singleBot.damage}</p>
                </div>
                <div className="singleProp">
                    <span>armor</span>
                    <div>
                        <div className="propProgress" style={{width:`${singleBot.armor.toString()}%`}}></div>
                    </div>
                    <p>{singleBot.armor}</p>
                </div>
            </div>
        </div>
        <img src={singleBot.avatar_url} />

        <div className="buttons">
            <button onClick={()=>setModalIsSet(false)}>Back</button>
            <button onClick={()=>{
                listBot(singleBot.id,singleBot.listed)
                setModalIsSet(false)
                setSingleBot('')
                }}>{singleBot.listed?<p>Remove from Army</p>:<p>Enlist</p>}</button>
        </div>
    </div>
  )
}

export default BotDetails