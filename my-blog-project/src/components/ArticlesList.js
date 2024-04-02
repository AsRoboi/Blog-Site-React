import { Link } from "react-router-dom";

const ArticlesList = ({articles}) =>{

    return(

    <>
    {articles.map(articles => (
            <Link key={articles.name} className="article-list-item"  to={`/articles/${articles.name}`}>
                <h3>{articles.title}</h3>
               <p>{articles.content[0].substring(0, 150)}....</p> 
            </Link>
    ))}
    </>
        

    );
    }

    export default ArticlesList;
