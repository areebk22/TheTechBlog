import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams();
    const { data:blog , isLoading , err } = useFetch('http://localhost:8000/blogs/' + id) ;
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + id ,{
            method : "DELETE" ,
        }).then(() =>{
            history.push('/') ; // to re-direct to home
        })
    }
    
    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading...</div>} 
            {err && <div> {err} </div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p><em>Written by  {blog.author}</em></p> <br />
                    <div> {blog.body} </div>
                    <button onClick={ handleDelete }>Delete blog</button>
                </article>
            )}
        </div>
    );
}
export default BlogDetails;