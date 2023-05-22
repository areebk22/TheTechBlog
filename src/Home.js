import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {

    const {data:blogs, IsLoading ,err} = useFetch("http://localhost:8000/blogs") ; 
    //    this means grab the 'data' and use it as blogs in this file.

    return (
        <div className="home">
            {err && <div> {err} </div> }
            {IsLoading && <div>Loading...</div>}
            {blogs && <BlogsList blogs={blogs} title="All Blogs"/> }
        </div>                                                                       
    ) ;
}
                      
export default Home; 
