import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import books from './books';
import Book from './Book';

const BookList = () => {
  const someValue = 'shakeAndBake';

  const displayValue = () => {
    console.log(someValue);
  }
  const getBook = (id) => {
    const book = books.find((book) => book.id == id);
    console.log(book);
  }
  return (
    <>
    <h1>Amazon Best Sellers</h1>
    <section className='booklist'>
      {books.map((book,index)=>{
          return (
            <Book key={book.id} {...book} number={index} />
         )
      })}
    </section>
    </>
  )
}

// const EventExamples = () => {


//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log('form submitted');
//   }

//   const handleFormInput = () => {
//     console.log('handle form input');
//   }
//   const handleButtonClick = () => {
//     alert('handle button input');
//   }
//   return <section>
//       <form onSubmit={handleFormSubmission}>
//          <h2>Typical Form</h2>
//          <input 
//          type="text"
//          name='example'
//          onChange={handleFormInput}
//          style={{margin: '1rem 0 '}} />
//           <button type="submit">Submit</button>
//       </form>
//       <button onClick={handleButtonClick}>Click Me</button>
//       <button onClick={() => console.log("CLICKED ME ANONYMOUS FUNC")}>Anonymous</button>
//   </section>
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)