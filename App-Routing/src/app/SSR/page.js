
import styles from './page.module.css'

export default async function Client() {

    let response = await fetch('https://api.github.com/users');
    let fetchData = await response.json();
    console.log(fetchData); // Now fetchData contains the user data 
    let clientData=fetchData.slice(13,19)

  return (
    <div className={styles.clientInfo}>
        <ul className={styles.ul}>

        {clientData.map((user)=>(
            <li key={user.id} className={styles.li}>
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