import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
const AddArticle = () => {
    const [title,setTitle] = useState('')
    const [article,setArticle] = useState('')
    const [authorname,setAuthorname] = useState('')
    const [message,setMessage] = useState('')
    
    const addNewArticle =(e)=>{
        e.preventDefault();
        if(!title || !article || !authorname){
            return 
        }
           const addArticle ={
               title,
               article,
               authorname,
           }
    
            setTitle('')
            setArticle('')
            setAuthorname('')
            axios.post('/articles/add',addArticle)
            .then(res=>setMessage(res.data))
            .catch(err=>{console.log(err)})
            window.location.href="/"
        }

       
    return (
        <AddArticleContainer>
        <div className="container">
            <h1>
            Add a new Article
            </h1>
            <span className="message">{message}</span>
          <form onSubmit={addNewArticle} encType="multipart/form-data" >
  <div className="form-group" >
    <label htmlFor="authorname">Author Name</label>
    <input type="text" className="form-control" placeholder="author name" value={authorname} onChange={e=>setAuthorname(e.target.value)}  />
  </div>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" placeholder="title" value={title} onChange={e=>setTitle(e.target.value)} />
  </div>
  <div className="form-group">
    <label htmlFor="article">Article</label>
    <textarea className="form-control" rows="3" value={article} onChange={e=>setArticle(e.target.value)}></textarea>
  </div>
  <button type="submit" className="btn btn-primary" onClick={addNewArticle}>Post Article</button>
</form> 
</div>
</AddArticleContainer>
    )
}

export default AddArticle

//Main container
const AddArticleContainer = styled.div`
margin: 3rem auto;
padding: 4rem;
width: 31.25rem;
h1{
    font-weight: 900;
    color: var(--dark-green);
}
.btn-primary{
    background: var(--dark-green);
    margin-top: 10px;
    border: none;
    &:hover{
        background: var(--light-green);
    }  
}
.message{
    color: tomato;
    font-size: 16px;
}

@media(max-width:765px){
    margin: 10 auto;
    padding: 10px;
    width: 300px;
    h1{
        font-size: 26px;
        text-align: center;
    }
    
}
@media(max-width:300px){
    margin: 10 auto;
    padding: 10px;
    width: 300px
}
`;
