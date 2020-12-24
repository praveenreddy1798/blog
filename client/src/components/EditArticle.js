import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
const EditArticle = ({posts}) => {
    const [title,setTitle] = useState('')
    const [article,setArticle] = useState('')
    const [authorname,setAuthorname] = useState('')
    const [message,setMessage] = useState('')
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`/articles/article/${id}`)
        .then(res=>[
            setTitle(res.data.title),
            setAuthorname(res.data.authorname),
            setArticle(res.data.article),
        ])
        .catch(err=>{
            console.log(err)
        })
    },[id])

   
    const editArticle =(e)=>{
        e.preventDefault();
        if(!title || !article || !authorname ){
            return 
        }
        const editArticle={
            title,
            authorname,
            article,
        }
        setTitle('')
        setArticle('')
        setAuthorname('')
        axios.put(`/articles/update/${id}`,editArticle)
        .then(res=>setMessage(res.data))
        .catch(err=>{console.log(err)})
        window.location.href='/'

      
    }
    return (
        <EditContainer>
        <div className="container">
            <h1>
            Update Article
            </h1>
            <span className="message">{message}</span>
          <form onSubmit={editArticle} encType="multipart/form-data" >
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
  {/* <div className="form-group">
    <label htmlFor="articalImage">Choose article Image</label>
    <input type="file" className="form-control-file"  filename='articalImage' onChange={e=>setFilename(e.target.files[0])} />
  </div> */}
  <button type="submit" className="btn btn-primary" onClick={editArticle}>Update Article</button>
</form> 
</div>
</EditContainer>
    )
}

export default EditArticle

//Main container
const EditContainer = styled.div`
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
    .message{
        color: tomato;
        font-size: 13px;
    }
    
}
@media(max-width:300px){
    margin: 10 auto;
    padding: 10px;
    width: 300px
    .message{
        color: tomato;
        font-size: 13px;
    }
}
`;
