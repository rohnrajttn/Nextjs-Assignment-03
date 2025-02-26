import React from 'react'
import styles from './index.module.css'
import { useRouter } from 'next/navigation'
export default function Users(props) {
    // console.log(props)
    let router=useRouter()

  return (
    <div className={styles.userInfo}>
        <ul className={styles.ul}>

        {props.data.map((user)=>(
            <li key={user.id} className={styles.li} onClick={()=>{
                router.push(`/users/${user.id}`)
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

export const getServerSideProps=async()=>{
    const fetchUserData=await (await fetch('https://api.github.com/users')).json()
    // console.log("ssr : ",UserData)
    const UserData=fetchUserData.slice(0,5)
    return {
        props:{
            data: UserData
        }
    }
}
