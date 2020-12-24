import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import spinner from '../images/ZZ5H.gif'
import axios from 'axios'
const Articles = ({posts}) => {
    const [article,setArticle] = useState([])
    const deleteArticle=id=>{
        axios.delete(`articles/${id}`).then(res=>alert(res.data));
         setArticle(article.filter(elem=>elem._id!==id))
         window.location.reload();
    }
    return (
        <MainContainer>
            {posts.length > 0 ? posts.map((article) => (
                <div className="container responsive py-4 px-2" key={article._id} style={{borderBottom: "1px solid grey"}}>
                    <div className="pb-3"style={{fontWeight: "900", fontSize: "22px"}}>
                        <Link to = {`/article/${article._id}`} >
                        {article.title}
                        </Link>
                    </div>
                    <p className="pb-3">
                        {article.article}
                    </p>
                    <span className="badge badge-secondary" style={{fontSize: "15px"}}>
                        {article.authorname}
                    </span>
                    <div className="row my-5">
                        <div className="col-sm-2 column">
                            <Link to={`/update/${article._id}`} className="btn btn-outline-success">Edit Article</Link>
                        </div>
                        <div className="col-sm-2 column">
                            <button onClick={()=>deleteArticle(article._id)} className="btn btn-outline-danger">Delete Article</button>
                        </div>

                    </div>

                </div>
            )): <img src={spinner} alt="loading" /> }

           
        </MainContainer>
    )
}

export default Articles

const MainContainer = styled.div`   
    margin: 3rem 0;
    .div{
        font-weight: 900;
        font-size: 30px;
    }
    img{
        width: 60px;
        display: block;
        margin: 0 auto;
    }
        p{
            line-height:1.2em;
            height:3.6em;
            overflow:hidden;
          }

    @media (max-width:765px){
        .column{
            width: 50%;
        }
            margin: 0 auto;
            padding: 5px;
            width: 320px;

      
    }
`;

