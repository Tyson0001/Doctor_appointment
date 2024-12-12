import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
