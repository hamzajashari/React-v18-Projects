const Book = (props)=> {
    const {img, title, author, getBook,id,number} = props;
    const getSingleBook = () => {
      getBook(id);
    };
    return (
      <article className='book'>
          <img src = {img} alt={author}/>
          <h2>{title}</h2>
          {/* <button onClick={getSingleBook}>TITLE DISPLAY</button> */}
          <h4>{author}</h4>
          <span className="number">{`# ${number + 1}`}</span>
      </article>
    )
  }
  export default Book