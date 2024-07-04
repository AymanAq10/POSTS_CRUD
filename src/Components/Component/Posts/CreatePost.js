import Footer from "../Footer";
import Header from "../Header";
import { useState } from "react";
const CreatePost = () => {
    const [postdata,setpostdata]=useState({});
    const [author,SetAuthor]=useState('')
    function handlechange(e){
        const {value,name}=e.target;
        name==="author"?SetAuthor(value):SetAuthor((e)=>e);
        setpostdata({...postdata,[name]:value});
        console.log(postdata);
    }
    function submitfunc(e){
        e.preventDefault();
        fetch("https://posts-data-server.onrender.com/posts",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(postdata),
        }).then(()=>{
            alert('post add ');
            window.location.pathname='/';
        })
    }
    const Update = (id) => {
        fetch(`https://posts-data-server.onrender.com/Posts/${parseInt(id)}`,{
            method:'DELETE',
        }).then(()=>{
            alert('post Added')
            window.location.pathname='/';
        })
    }
    return (
        <>
        <Header/>
            <section className="create-post">
                <h2>Add New Post</h2>
                <form onSubmit={submitfunc}>
                    <label>Blog title :</label>
                    <input type="text" required name="title" onChange={(e)=>handlechange(e)} />
                    <label>Blog Image :</label>
                    <input type="url" required name="img" onChange={(e)=>handlechange(e)} />
                    <label>Blog body :</label>
                    <textarea required rows={"10"} name="body" onChange={(e)=>handlechange(e)}></textarea>
                    <label>Blog author :</label>
                    <select name="author" value={author} onChange={(e)=>handlechange(e)}>
                        <option selected > choose ur job</option>
                        <option value={"admin"}>admin</option>
                        <option value={"Coder"}>Coder</option>
                    </select>
                    <button className="btn" onClick={Update} type="submmit">
                        Add Blog
                    </button>
                </form>
            </section>
            {/* <Footer/> */}
        </>
    )
}
export default CreatePost;
