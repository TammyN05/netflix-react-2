import {Route, Routes} from 'react-router-dom'
import Main from './components/Main';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function App() {
  return (
    <div>
    <Navbar />
    <Main />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
