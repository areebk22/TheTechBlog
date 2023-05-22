import { Link } from "react-router-dom";

const BlogsList = ({blogs,title}) => {  
    return (
        <div className="blogs-list">
            <h2>{title}</h2> <br />
            { blogs.map( (blog) => (
            <div className="blog-preview" key={blog.id} >
                <Link to= {`/blogs/${blog.id}`} >   
                    <h2> { blog.title } </h2>
                    <p><em>by {blog.author}</em></p>  
                </Link>        
            </div> 
         ))}
        </div>
    );
}
 
export default BlogsList;