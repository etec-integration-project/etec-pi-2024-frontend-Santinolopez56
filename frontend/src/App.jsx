import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './Components/Body/body.jsx';
import Header from './Components/header/header.jsx';
import Footer from './Components/footer/footer.jsx';
import Catalogo from './Components/catalogo/catalogo.jsx';
import Register from './Components/register/register.jsx';
import Login from './Components/login/login.jsx';

// Componente Layout para encapsular Header y Footer
function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout><Body /></Layout>} />
        <Route path='/catalogo' element={<Layout><Catalogo /></Layout>} />
        <Route path='/login' element={<Layout><Login /></Layout>} />
        <Route path='/register' element={<Layout><Register /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
