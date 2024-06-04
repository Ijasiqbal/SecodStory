import React from 'react';
import styles from './Row.module.css';
import ShelfBook from './ShelfBook';
import AddBook from './AddBook';
import { Carousel } from 'primereact/carousel';
import paperClip from '../../../assets/paperClip.png'

export default function Row({ books, category}) {
  const itemTemplate = (item) => {
    if (item.addBook) {
      return <AddBook category= {category} />;
    }

    return <ShelfBook key={item.id} book={item} />;
  };
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const booksWithAddBook = [...books, { addBook: true }];

  return (
    <div className={styles.row}>
      <Carousel className={styles.custom} value={booksWithAddBook} itemTemplate={itemTemplate} responsiveOptions={responsiveOptions} numVisible={5} numScroll={1} />
      <div className={styles.sticker}>
        <img src={paperClip} alt="peprlip" className={styles.stickerImg}/>
        <p>{category}</p>
      </div>
    </div>
  )
}