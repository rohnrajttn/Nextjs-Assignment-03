import styles from './page.module.css';

export default async function Client() {
    let fetchData = await (await fetch('https://api.github.com/users', { next: { revalidate: 3600 } })).json();
    let clientData = fetchData.slice(7, 13); // Select users

  return (
    <div className={styles.clientInfo}>
        <ul className={styles.ul}>
        {clientData.map((user) => (
            <li key={user.id} className={styles.li}>
                <figure className={styles.figure}>
                    <img src={user.avatar_url} alt={'picture'} className={styles.img}/>
                </figure>
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
