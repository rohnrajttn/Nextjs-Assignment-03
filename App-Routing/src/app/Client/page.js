'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'

export default function Client() {

    const router=useRouter()
    const [fetchData, setfetchData]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users').then(data=>data.json()).then(data=>{
            const clientData=data.slice(7,13);
            setfetchData(clientData);
        })
    },[])
    
    // console.log(fetchData)
    // let clientData=fetchData.slice(7,13)

  return (
    <div className={styles.clientInfo}>
        <ul className={styles.ul}>

        {fetchData.map((user)=>(
            <li key={user.id} className={styles.li} onClick={()=>{
                router.push(`/Client/${user.id}`)
            }}>
                <figure className={styles.figure}><img src={user.avatar_url} alt={'picture'} className={styles.img}/></figure>
                <div>
                    <h3>{user.login}</h3>
                    <h4>{user.id}</h4>
                </div>
            </li>
        ))}
        </ul>
    </div>
  )
}