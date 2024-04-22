import { Routes, Route } from 'react-router-dom';
import App from './App';
import CreatePost from "./Component/Posts/CreatePost";
import Postdetails from "./Component/Posts/Postdetails";
import Update from './Component/Posts/Update';
function Routers() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Create' element={<CreatePost />} />
                <Route path='/Details/:id' element={<Postdetails />} />
                <Route path='/Update/:id' element={<Update />} />
            </Routes>
        </div>

    )
}
export default Routers;