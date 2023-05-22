import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTitle]  = useState('') ;
    const [body,setBody]  = useState('') ;
    const [author,setAuthor]  = useState('yoshi') ;

    const [isLoading, setIsLoading] = useState(false) ;
    const history = useHistory() ;

    const handleSubmit = (e) => {
        e.preventDefault() ;
        const blog = {title,body,author} ;  

        setIsLoading(true);

        fetch("http://localhost:8000/blogs",{
            method : "POST" ,
            headers : {"Content-Type" : "application/json"} , // it means we are sending json data 
            body : JSON.stringify(blog) 
        }).then(() => {
            setIsLoading(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                  type="text"
                  required  
                  value = {title}
                  onChange = { (e) => setTitle(e.target.value) }
                />
                <label>Blog Body:</label>
                <textarea
                  required
                  value = {body}
                  onChange = { (e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select 
                  value = {author}
                  onChange = { (e) => setAuthor(e.target.value) }
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button> Add Blog </button>}
                {isLoading && <button disabled> Adding Blog... </button>}
            </form>
        </div>
    );
}
 
export default Create;  