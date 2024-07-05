import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './Components/Body/body.jsx'
import Header from './Components/header/header.jsx'
import Footer from './Components/footer/footer.jsx'
import Catalogo from './Components/catalogo/catalogo.jsx'
import Register from './Components/register/register.jsx';
import Login from './Components/login/login.jsx';


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
      <Route path='/catalogo' element={<>
        <Header></Header>
        <Catalogo></Catalogo>
        <Footer />
      </>
      }
      />
      <Route path='/login' element={<>
        <Header></Header>
        <Login></Login>
        <Footer />
      </>
      }
      />
      <Route path='/register' element={<>
        <Header></Header>
        <Register></Register>
        <Footer />
      </>
      }
      />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
