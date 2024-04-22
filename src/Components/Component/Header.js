import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <header>
            <nav className="navbar container">
                <h1>Posts</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    <Link to="/Create" className="btn">New Post</Link>
                </div>
            </nav>
        </header>
    )
}
export default Header;