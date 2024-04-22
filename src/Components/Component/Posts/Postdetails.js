import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
const Postdetails = () => {
    const { id } = useParams()
    const [posts, setposts] = useState(null);
    const [isloading, setisloading] = useState(false);
    const [errMsg, seterrMsg] = useState(null);
    useEffect(() => {
        setisloading(true);
        seterrMsg(null);
        fetch(`https://posts-data-server.onrender.com/${parseInt(id)}`)
            .then((res) => {
                if (!res.ok) {
                    throw Error(res.statusText ? res.statusText : "error");
                }
                return res.json();
            })
            .then((data) => {
                setisloading(false);
                setposts(data);
                console.log(data);
            })
            .catch((err) => {
                setisloading(false);
                seterrMsg(err.message);
            });
    },[id]);
    const Delete = () => {
        fetch(`https://posts-data-server.onrender.com/${parseInt(id)}`,{
            method:'DELETE',
        }).then(()=>{
            alert('post deleted')
            window.location.pathname='/';
        })
    }

    return (<>
    <Header/>
    {posts && 
        <article className="container post-details">
            <div className="post-details-title">
                <h1>{posts.title}</h1>
                <div>
                <Link className="btn btn-danger" to={`/Update/${posts.id}`}>
                    Update
                </Link>
                <button className="btn btn-danger" onClick={Delete}>Delete</button>
                </div>
            </div>
            <img
                src={posts.img}
                alt=""
                className="post-details-img"
                />
                <h3>{posts.author}</h3>
            <p className="post-details-body">
                {posts.body}
            </p>
        </article>
            }
            {isloading && <div>loading ...</div>}
            {!posts && !isloading && !errMsg && <div>No data</div>}
            {errMsg && !isloading && <div>{errMsg}</div>}
    </>
    )
}
export default Postdetails;
