import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Add from './pages/Add';
import Search from './pages/Search';
import Post from './pages/Post';
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<Post/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
