import React from 'react'
import './Styles.css'
import TabsList from './components/Tab'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

function App() {
  let bookApi = "https://legacy--api.herokuapp.com/api/v1/books"
  const [data, setData] = useState([])
  
  function Book (){
    fetch(bookApi)
    .then(response =>  response.json())
    .then(jsonObject => { 
      const books = jsonObject
      setData(books)
    })
    .catch((error) => console.log("Error", error))    
}
   
  useEffect(Book, []) 

  const renderTabs = data.slice(0, 8); 

  return (
    <div className="App">
      <Header />
      <TabsList  data={renderTabs}/>
      <Footer />
    </div>
  );
}

export default App;