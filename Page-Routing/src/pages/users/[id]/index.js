import React, { useEffect, useState } from 'react'

function id(props) {
    // console.log(props.id)
    let [fetchUserData,setfetUserData]=useState([])
    useEffect(()=>{
        async function fetchData(){

            fetch(`https://api.github.com/users/${props.id}`).then((data)=>data.json()).then(data=>setfetUserData(data))
        }
        fetchData()
    }, [props.id])
    console.log(fetchUserData)
    // const user=fetchUserData.filter((val)=> Number(props.id)===val.id)
    // let userData=user[0]
    // console.log(userData)
  return (
    <div>
        <figure><img src={fetchUserData.avatar_url} alt={'picture'}/></figure>
        <div>
            <h3>{fetchUserData.login}</h3>
            <h4>{fetchUserData.id}</h4>
        </div>
    </div>
  )
}

export const getServerSideProps = (context)=>{
    // const {id} = params
    const params = context.params
    
    // console.log("from server page params data: ",params)

    return  {
        props : {id : params.id}
    }
}
export default id
