const BaseUrl ='http://localhost:8800/bots'
export async function fetchBots(){
    try{
        let res = await fetch(BaseUrl)
        let data = await res.json()
        return data
        
    }catch(error){
        console.log(error)
    }
}

export async function fetchSingleBot(id){
    try{
        let res = await fetch(`${BaseUrl}/${id}`)
        if(!res.ok){
            throw new Error
        }
        let data = await res.json()
        return data

    }catch(err){
        return false
    }
    
}
export async function listBot(id){
    alert(id)
    // try{
    //     let res = await fetch(`${BaseUrl}/${id}`,{
    //         method:'PATCH',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({listed:true})
    //     })
    //     if(!res.ok){
    //         throw new Error
    //     }
    //     let data = await res.json()
    //     return data

    // }catch(err){
    //     return false
    // }
    
}
