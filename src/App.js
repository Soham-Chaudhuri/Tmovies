import logo from './logo.svg';
import './App.css';
import React,{ useState , useEffect } from 'react';

function App() {

  const [Posts, setPosts] = useState([]);
  const movieName='Wednesday';
  const key='a5310a2a';
  useEffect(()=>{
    fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=${key}`)
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
      setPosts(data);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={Posts.Poster} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> {Posts.Genre}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
