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
export async function listBot(id,listed){
    if(listed){
        try{
            let res = await fetch(`${BaseUrl}/${id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({listed:false})
            })
            if(!res.ok){
                throw new Error('failed to fetch')
            }
            let data = await res.json()
            // return data
            return data
    
        }catch(err){
            return false
        }
    }else{
        try{
            let res = await fetch(`${BaseUrl}/${id}`,{
                method:'PATCH',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({listed:true})
            })
            if(!res.ok){
                throw new Error('failed to fetch')
            }
            let data = await res.json()
            // return data
            return data
    
        }catch(err){
            return false
        }
    }

    
}
