import ReactDOM from 'react-dom/client';
// import App from './App';
// import App from '../src/Components/App';
// import Routers from './Components/Routers';
// import './index.css';
// import Routers from './Components/Routers';
// import App from './Components/App'; 
// // import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter } from 'react-router-dom';
import Routers from './Components/Routers';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App/>
    <BrowserRouter>

        <Routers/>
    </BrowserRouter>
);

