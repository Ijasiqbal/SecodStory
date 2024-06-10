import styles from './Shelf.module.css'
import shelf from '../../../assets/shelf.jpg'
import shelf1 from '../../../assets/singleshelf.jpg'
import shelf2 from '../../../assets/shelf2.jpg'
import shelf3 from '../../../assets/shelf3.jpg'
import AddBook from './AddBook'
import ShelfBook from './ShelfBook'
import book1 from '../../../assets/f3.jpg'
import book2 from '../../../assets/f2.jpg'
import { useEffect, useState } from 'react'
import Row from './Row'
import { useSelector } from 'react-redux'

export default function Shelf() {

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Book Title 1",
      author: "Author Name 1",
      image: book1
    },
    {
      id: 2,
      title: "Book Title 2",
      author: "Author Name 2",
      image: book2
    },
    {
      id: 3,
      title: "Book Title 3",
      author: "Author Name 3",
      image: book1
    },
    {
      id: 4,
      title: "Book Title 4",
      author: "Author Name 4",
      image: book2
    },
    {
      id: 5,
      title: "Book Title 5",
      author: "Author Name 5",
      image: book1
    }
    // Add more books as needed
  ]);

  const sellBooks = useSelector((state)=> state.user.user.shelf.sell)
  const lendBooks = useSelector((state)=> state.user.user.shelf.lend)
  const keepBooks = useSelector((state)=> state.user.user.shelf.keep)

  useEffect(()=>{
  })

  
  return (
    <div className={styles.base}>
      <div className={styles.shelf1}>
        <img src={shelf1} alt='shelf1' className={styles.shelf1img} />
        <div className={styles.row1}>
          <Row 
          books={sellBooks}
          category="sell"
          />
        </div>
      </div>
      <div className={styles.shelf1}>
        <img src={shelf2} alt='shelf1' className={styles.shelf1img} />
          <div className={styles.row2}>
            <Row 
            books={lendBooks}
            category="lend"
            />
          </div>
      </div>
      <div className={styles.shelf1}>
        <img src={shelf2} alt='shelf1' className={styles.shelf1img} />
        <div className={styles.row3}>
          <Row 
          books={keepBooks}
          category="keep"
          />
        </div>
      </div>
      
    </div>
  )
}