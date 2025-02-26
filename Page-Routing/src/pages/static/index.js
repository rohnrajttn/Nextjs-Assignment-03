
import styles from "./index.module.css";
import authorData from '../../../public/data/blog.json'

function AuthorsList(props) {

    // console.log(props)
    let authors=props.data.authors
    // console.log(authors)
  return (

    <div className={styles.container}>
      <h1 className={styles.title}>Famous Authors & Their Books</h1>
      <ul className={styles.authorsList}>
        {authors.map((author) => (
          <li key={author.id} className={styles.authorCard}>
            <h2>{author.name}</h2>
            <p><strong>Famous Books:</strong></p>
            <ul className={styles.booksList}>
              {author.famous_books.map((book, index) => (
                <li key={index}>{book}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorsList;

export const getStaticProps=async()=>{

    return{
        props:{
            data:authorData,
        },
        revalidate: 10,
    }

}