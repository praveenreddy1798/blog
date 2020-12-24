import React,{useState,useEffect} from 'react'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/layouts/Header'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer';
import Articles from './components/Articles'
import {Route} from 'react-router-dom'
import axios from 'axios'
import AddArticle from './components/AddArticle';
import EditArticle from './components/EditArticle';
import Article from './components/Article';
function App() {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    axios.get('/articles/')
    .then(res=>setPosts(res.data))
    .catch(err=>{console.log(err)})
  },[])
  return (
    <div className="App">
    <Header />
    <Navbar />
    <Route exact path='/' render={()=><Articles posts={posts} />}/>
    <Route path='/article/:id' render={()=><Article posts={posts} />}/>
    <Route path='/add-article' component={AddArticle} />
    <Route path='/update/:id' render={()=><EditArticle posts={posts} />} />
    <Footer />
    </div>
  );
}

export default App;
