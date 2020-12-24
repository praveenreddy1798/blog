import React,{useState,useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import spinner from '../images/ZZ5H.gif'
import axios from 'axios'
import styled from 'styled-components'
const Article = () => {
    const [title,setTitle] = useState('')
    const [article,setArticle] = useState('')
    const [authorname,setAuthorname] = useState('')
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
    return (
        <ArticleMainContainer>
            {!title || !article || !authorname ? (<img src={spinner} alt="loading" />) : (
           <>
           <h2>{title}</h2>
            <p>{article}</p>
            <div className="badge badge-secondary" >{authorname}</div>
            <br />
            <Link to="/" type="submit" className="btn btn-primary">Back to Home</Link>
            </>
            )}
            
        </ArticleMainContainer>
    )
}

export default Article

const ArticleMainContainer = styled.div`
margin: 6rem auto;
padding: 3rem 14rem;
h2{
    text-align: center;
    font-weight: 900;color: var(--dark-green);
    margin-bottom: 20px;
}
img{
    width: 60px;
    display: block;
    margin: 0 auto;
}
.badge{
    font-size: 15px;
}
.btn-primary{
    background: var(--dark-green);
    margin: 30px auto;
    border: none;
    &:hover{
        background: var(--light-green);
    }
}  
    
    @media(max-width:765px){
    margin: 5 auto;
    padding: 5px;
    width: 300px;
    h2{
        font-size: 20px;
    }
    .btn-primary{
        margin-top: 40px; 
        margin-left: 25%;
     }
    
}

    @media(max-width:250px){
        margin: 5 auto;
        padding: 5px;
        width: 300px
        h2{
            font-size: 15px;
        }
        .btn-primary{
           margin: 10px; 
        }
    }
     
    

`;
