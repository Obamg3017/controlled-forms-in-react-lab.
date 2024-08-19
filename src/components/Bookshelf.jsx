import { useState } from 'react'


const Bookshelf = () => {

const [books, setBooks] = useState([
    {title: "Mindset", author: "Carol Dweck"},
    {title: "Eloquent Javascript", author: "Marijn Haverbeke"},
])
const [newBooks, setNewBooks] = useState({
    title: "",
    author: "",
})

const handleInputChange = (event) => { 
   setNewBooks({...newBooks, [event.target.name] :
    event.target.value
})
};

const handleSubmit = (event) =>{
    event.preventDefault()
    setBooks([...books, newBooks])
    setNewBooks({ title: "", author: ""})
}

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            value={newBooks.title}
            onChange={handleInputChange}
          />
          <label htmlFor="author">Author: </label>
          <input
            id="author"
            name="author"
            value={newBooks.author}
            onChange={handleInputChange}
          />
          <button type='submit'>Add New Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">{books.map((book, index)=>{
        return (
            <div key={index}>
                <h2>{book.title}</h2>
                <h2>{book.author}</h2>
            </div>
        )
      })}
      </div>
    </div>
  );
}

export default Bookshelf
