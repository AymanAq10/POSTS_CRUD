import Post from "./Post";
import { useState,useEffect } from "react";
const Posts = () => {
    const [posts, setposts] = useState(null);
    const [isloading, setisloading] = useState(false);
    const [errMsg, seterrMsg] = useState(null);
    useEffect(() => {
        setisloading(true);
        seterrMsg(null);
        setTimeout(
            ()=>{
                fetch("https://posts-data-server.onrender.com/Posts")
                .then((res) => {
                        if (!res.ok) {
                            throw Error(res.statusText ? res.statusText : "error");
                        }
                        return res.json();
                    })
                    .then((data) => {
                        setisloading(false);
                        setposts(data);
                    })
                    .catch((err) => {
                        setisloading(false);
                        seterrMsg(err.message);
                    });
                }
                ,3000)

    }, []);
    const Delete = (id) => {
        // setposts([...posts.filter((e) => e.id !== id)])
        fetch(`https://posts-data-server.onrender.com/Posts/${parseInt(id)}`,{
            method:'DELETE',
        }).then(()=>{
            alert('post deleted')
            window.location.pathname='/';
        })
    }
    return (
        <div className="posts">
                {posts &&  posts.map((post) => (
                        <Post Delete={Delete} id={post.id} title={post.title} key={post.id} img={post.img} author={post.author} />
                    ))
                }
                {isloading && <div>loadin...</div>}
                {!posts && !isloading  && !errMsg && <div className="not-found">No data</div>} 
                {errMsg && <div className="error">{errMsg}</div>}
        </div>
    )
}
export default Posts;
