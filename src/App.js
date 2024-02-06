import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import { Routes, Route,useParams } from "react-router-dom";
import Items from './Items';
import Cart from './Cart';

function App() {
    return (
        <div className="App">


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/items/:id' element={<Items/>}></Route>
                <Route path='/items/Card' element={<Cart/>}></Route>
            </Routes>

        </div>
    );
}
export default App;