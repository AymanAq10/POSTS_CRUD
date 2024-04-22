import { Link } from "react-router-dom";
const Post = (props) => {
    return (
        <div className="post">
            <Link to={`/Details/${props.id}`}>
                <img
                    src={props.img}
                    alt="" />
            </Link>
                <div className="post-author">By:{props.author ? props.author : 'unknow'}</div>
                <h3>{props.title}</h3>
            <div style={{width:'100%'}}>
                <button className="btn" onClick={() => props.Delete(props.id)}>
                    Delete
                </button>
                <Link style={{ marginLeft: '2%' }} className='btn' to={`/Update/${props.id}`}>
                    Update
                </Link>
            </div>
        </div>
    )
}
export default Post;