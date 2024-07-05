import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './Components/Body/body.jsx'
import Header from './Components/header/header.jsx'
import Footer from './Components/footer/footer.jsx'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<>
        <Header></Header>
        <Body></Body>
        <Footer />
      </>
      }
      />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
